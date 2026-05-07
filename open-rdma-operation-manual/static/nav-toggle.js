// 为所有嵌套导航项添加单击折叠/展开功能
function initNavToggle() {
    // 选择所有包含子菜单的导航项
    const nestedItems = document.querySelectorAll('.md-nav__item--nested');
    nestedItems.forEach(item => {
        const link = item.querySelector('.md-nav__link');
        if (!link) return;
        // 避免重复绑定事件
        if (link.hasAttribute('data-nav-toggle')) return;
        link.setAttribute('data-nav-toggle', 'true');
        link.addEventListener('click', (e) => {
            e.preventDefault();          // 阻止跳转
            const parent = e.currentTarget.closest('.md-nav__item--nested');
            if (parent) {
                parent.classList.toggle('md-nav__item--active');
            }
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initNavToggle);

// 如果启用了 navigation.instant，处理局部刷新导致的新增导航项
const observer = new MutationObserver(() => initNavToggle());
observer.observe(document.body, { childList: true, subtree: true });