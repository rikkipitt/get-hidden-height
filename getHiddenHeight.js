const visibleStyles = {
    overflow: 'visible',
    height: 'auto',
    maxHeight: 'none',
    opacity: '0',
    visibility: 'hidden',
    display: 'block',
}

export function getHiddenHeight(el, overrideStyles = {}) {
    if(!el?.cloneNode) {
        return null;
    }

    const clone = el.cloneNode(true);
    let height = 0;

    Object.assign(clone.style, {...visibleStyles, ...overrideStyles});
    
    el.after(clone);
    height = clone.offsetHeight;

    clone.remove();

    return height;
}

export default getHiddenHeight;