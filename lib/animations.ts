
export const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] };

export const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

export const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// A soft, breathing float for images/elements
export const float = {
    animate: {
        y: [0, -10, 0],
        rotate: [0, 1, -1, 0],
        transition: {
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
        },
    },
};

export const softReveal = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export const lineDraw = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut" }
    }
};
