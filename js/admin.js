/**
 * Admin Panel Core JavaScript
 * Handles Theme Switching (Light/Dark/Auto), Responsive Sidebar Toggle,
 * Mobile Drawer Backdrop, Tooltips, and Navigation Highlighting.
 */

(function () {
  'use strict';

  // ==========================================
  // 1. THEME SWITCHER (BS 5.3 Native Support)
  // ==========================================
  const THEME_STORAGE_KEY = 'admin-template-theme';

  const getStoredTheme = () => localStorage.getItem(THEME_STORAGE_KEY);
  const setStoredTheme = (theme) => localStorage.setItem(THEME_STORAGE_KEY, theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }
    return 'auto';
  };

  const applyTheme = (theme) => {
    let resolvedTheme = theme;
    if (theme === 'auto') {
      resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    if (document.documentElement.getAttribute('data-bs-theme') !== resolvedTheme) {
      document.documentElement.setAttribute('data-bs-theme', resolvedTheme);
    }

    // Dispatch custom event for charts or components that need to re-render colors
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: resolvedTheme } }));
  };

  const updateThemeUI = (theme) => {
    const themeDropdown = document.querySelector('#bd-theme');
    if (!themeDropdown) return;

    const themeToggleText = document.querySelector('#bd-theme-text');
    const activeThemeIcon = document.querySelector('.theme-icon-active');
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);

    if (!btnToActive) return;

    const iconOfActiveBtn = btnToActive.querySelector('i').getAttribute('class');

    document.querySelectorAll('[data-bs-theme-value]').forEach((element) => {
      element.classList.remove('active');
      element.setAttribute('aria-pressed', 'false');
    });

    btnToActive.classList.add('active');
    btnToActive.setAttribute('aria-pressed', 'true');

    if (activeThemeIcon) {
      activeThemeIcon.className = `${iconOfActiveBtn} theme-icon-active`;
    }

    const themeDesc = `${btnToActive.textContent.trim()} (${theme})`;
    if (themeToggleText) {
      themeToggleText.textContent = themeDesc;
    }
  };

  // Immediate execution to prevent flash of wrong theme
  applyTheme(getPreferredTheme());

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme();
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      applyTheme(getPreferredTheme());
    }
  });

  // ==========================================
  // 2. DOM CONTENT LOADED INITIALIZATIONS
  // ==========================================
  document.addEventListener('DOMContentLoaded', () => {
    // Sync Theme UI dropdown
    updateThemeUI(getPreferredTheme());

    document.querySelectorAll('[data-bs-theme-value]').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const theme = toggle.getAttribute('data-bs-theme-value');
        setStoredTheme(theme);
        applyTheme(theme);
        updateThemeUI(theme);
      });
    });

    // ==========================================
    // 3. RESPONSIVE SIDEBAR CONTROLLER
    // ==========================================
    const SIDEBAR_COLLAPSED_KEY = 'admin-sidebar-collapsed';
    const sidebarToggleBtn = document.getElementById('sidebarToggle');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    const appSidebar = document.getElementById('appSidebar');

    // Restore desktop collapsed state
    if (window.innerWidth >= 992) {
      const isCollapsed = localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === 'true';
      if (isCollapsed) {
        document.body.classList.add('sidebar-collapsed');
      }
    }

    if (sidebarToggleBtn) {
      sidebarToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.innerWidth >= 992) {
          // Desktop: Toggle Mini Sidebar
          document.body.classList.toggle('sidebar-collapsed');
          const collapsed = document.body.classList.contains('sidebar-collapsed');
          localStorage.setItem(SIDEBAR_COLLAPSED_KEY, collapsed);
        } else {
          // Mobile: Toggle Offcanvas Overlay Drawer
          document.body.classList.toggle('sidebar-mobile-open');
        }
      });
    }

    // Close Mobile Sidebar when clicking backdrop
    if (sidebarBackdrop) {
      sidebarBackdrop.addEventListener('click', () => {
        document.body.classList.remove('sidebar-mobile-open');
      });
    }

    // Close mobile sidebar when clicking a nav-link on mobile
    if (appSidebar) {
      appSidebar.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          if (window.innerWidth < 992 && !link.hasAttribute('data-bs-toggle')) {
            document.body.classList.remove('sidebar-mobile-open');
          }
        });
      });
    }

    // Window Resize Handler
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) {
        document.body.classList.remove('sidebar-mobile-open');
        const isCollapsed = localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === 'true';
        if (isCollapsed) {
          document.body.classList.add('sidebar-collapsed');
        } else {
          document.body.classList.remove('sidebar-collapsed');
        }
      } else {
        document.body.classList.remove('sidebar-collapsed');
      }
    });

    // ==========================================
    // 4. ACTIVE MENU HIGHLIGHTER
    // ==========================================
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-sidebar .nav-link');

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && href === currentPath) {
        // Remove existing active from other links if any
        navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');

        // If inside a collapse submenu, expand it
        const parentCollapse = link.closest('.collapse');
        if (parentCollapse) {
          parentCollapse.classList.add('show');
          const trigger = document.querySelector(`[data-bs-target="#${parentCollapse.id}"]`);
          if (trigger) {
            trigger.classList.add('active');
            trigger.setAttribute('aria-expanded', 'true');
          }
        }
      }
    });

    // ==========================================
    // 5. TOOLTIPS & POPOVERS INITIALIZATION
    // ==========================================
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
  });
})();

