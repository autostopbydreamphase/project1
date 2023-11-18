gsap.registerPlugin(Flip);

const dur = 0.5;
let lastItems = [];
let lastIndex = -1;

const listItems = gsap.utils.toArray('.listItem');
listItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    const itemTargets = gsap.utils.toArray(item.querySelectorAll('*'));
    const isSameAsLast = i === lastIndex && listItems[lastIndex];
    const targets = isSameAsLast ? 
      listItems.concat(itemTargets) 
    : listItems.concat(itemTargets.concat(lastItems));
    
    const state = Flip.getState(targets);
    
    if(!isSameAsLast && listItems[lastIndex]) {
      listItems[lastIndex].classList.remove('expanded');
    }

    listItems[i].classList.toggle('expanded');
    
    Flip.from(state, {
      duration: dur,
      ease: "power1.inOut",
      absolute: true,
      nested: true,
      onEnter: elements => gsap.fromTo(elements, {opacity: 0}, {opacity: 1, duration: dur / 2, delay: dur / 2}),
      onLeave: elements => gsap.fromTo(elements, {opacity: (i, el) => state.getProperty(el, "opacity")}, {opacity: 0, duration: dur / 2}),
    });
    
    lastItems = itemTargets;
    lastIndex = i;
  });
});
