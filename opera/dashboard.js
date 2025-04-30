
document.addEventListener('DOMContentLoaded', () => {
  const openDashboardBtn = document.getElementById('open-dashboard-btn');
  const dashboard = document.getElementById('dashboard');
  const closeDashboardBtn = document.getElementById('close-dashboard-btn');

  if (openDashboardBtn && dashboard) {
    openDashboardBtn.addEventListener('click', () => {
      if (dashboard.classList.contains('show')) {
        dashboard.classList.remove('show');
        openDashboardBtn.style.display = 'flex'; 
      } else {
        dashboard.classList.add('show');
        openDashboardBtn.style.display = 'none'; 
      }
    });
  }

  if (closeDashboardBtn && dashboard) {
    closeDashboardBtn.addEventListener('click', () => {
      dashboard.classList.remove('show');
      openDashboardBtn.style.display = 'flex'; 
    });
  }

  
  const scrollRightBtn = document.getElementById('scroll-right-btn');
  const scrollLeftBtn = document.getElementById('scroll-left-btn');
  const dashboardContainer = document.querySelector('.dashboard-container');

  if (scrollRightBtn && dashboardContainer) {
    scrollRightBtn.addEventListener('click', () => {
      dashboardContainer.scrollBy({ left: 220, behavior: 'smooth' });
    });
  }

  if (scrollLeftBtn && dashboardContainer) {
    scrollLeftBtn.addEventListener('click', () => {
      dashboardContainer.scrollBy({ left: -220, behavior: 'smooth' });
    });
  }

  
  if (dashboardContainer) {
    dashboardContainer.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        dashboardContainer.scrollBy({ left: e.deltaY * 3, behavior: 'smooth' });
      }
    }, { passive: false });
  }
}); 