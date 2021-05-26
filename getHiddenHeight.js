const visibleStyles = {
    overflow: 'visible',
    height: 'auto',
    maxHeight: 'none',
    opacity: '0',
    visibility: 'hidden',
    display: 'block',
}

export function getHiddenHeight(el, overrideStyles = {}) {
    let height = 0;
    
    if(!el?.cloneNode) {
        return height;
    }

    const clone = el.cloneNode(true);

    Object.assign(clone.style, {...visibleStyles, ...overrideStyles});
    
    el.after(clone);
    height = clone.offsetHeight;

    clone.remove();

    return height;
}

export default getHiddenHeight;