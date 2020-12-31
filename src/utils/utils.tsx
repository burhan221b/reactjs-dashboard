import React from 'react';

export const openSideNav = () => {
    document.querySelector('#dashboard-nav-top-menu-bar')?.addEventListener('click', () => {
        document.querySelector('#dashboard-nav-side')?.classList.add('active')
    })
}

export const closeSideNav = () => {
    document.querySelector('#dashboard-nav-side-menu-close')?.addEventListener('click', () => {
        document.querySelector('#dashboard-nav-side')?.classList.remove('active')
    })
}