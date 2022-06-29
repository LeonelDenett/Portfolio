// Global
export const underlineMobile = {
    whileInView: {
        x: 0,
        transition: {type: 'spring', stiffness: 50, duration: 0.6}},
    animate: {x: -200}
}
export const underlineDesktop = {
    whileInView: {
        x: 0,
        transition: {type: 'spring', stiffness: 60, duration: 0.6}},
    animate: {x: -600}
}
export const titlePage = {
    whileInView: {
        y: 0,
        transition: {type: 'spring', stiffness: 60, duration: 0.5}},
    animate: {y: 100}
}
// About Page
export const skillsContainer = {
    whileInView: {
        x: 0,
        transition: {type: 'spring', stiffness: 50, duration: 0.2}},
    animate: {x: -300}
}
export const SpeedContainer = {
    whileHover:{ rotate: 360, transition: {duration: 0.5} },
}
export const IconsItems = {
    initial:{ y: -50, opacity: 0 },
    animate:{ y: 0, opacity: 1 },
    exit:{ y: 50, opacity: 0 },
}
export const IconsItemsSpeed = {
    initial:{ x: -50, opacity: 0 },
    animate:{ x: 0, opacity: 1 },
    exit:{ x: 50, opacity: 0 },
}
export const IconsResponsive = {
    initial:{ x: -50, opacity: 0 },
    animate:{ x: 0, opacity: 1, },
    exit:{ x: 50, opacity: 0},
}
// Portfolio Page
export const portfolioContainer = titlePage;

export const portfolioItem = {
    whileHover: {scale: 1.05}
}


