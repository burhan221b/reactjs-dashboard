import React from 'react';

export const openSideNav = () => {
    document.querySelector('#dashboard-nav-top-menu-bar')?.addEventListener('click', () => {
        document.querySelector('#dashboard-nav-side')?.classList.add('active')
        document.querySelectorAll('.overlay')?.forEach(overlay => overlay.classList.add('active'))
    })
}

export const closeSideNav = () => {
    document.querySelector('#dashboard-nav-side-menu-close')?.addEventListener('click', () => {
        removeDashboardActive()
    })
}

export const removeOverlay = () => {
    const overlays = document.querySelectorAll('.overlay')
    overlays?.forEach(overlay => {
        overlay.addEventListener('click', () => {
            removeDashboardActive()
        })
    })
}

export const removeDashboardActive = () => {
    document.querySelector('#dashboard-nav-side')?.classList.remove('active')
    document.querySelectorAll('.overlay')?.forEach(overlay => overlay.classList.remove('active'))
}