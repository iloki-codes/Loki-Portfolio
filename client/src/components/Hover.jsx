import { useState } from 'react'
import { getRandomColor } from './Utilities';
import { motion } from 'framer-motion';

const Hover = () => {

    const [show, setShow] = useState(false);

    const circles = Array.from({ length: 2 }, (_, i) => ({
        id: i,
        color: getRandomColor(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
    }));

    return (

        <div
            className='fixed inset-0 z-1 pointer-events-none'
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {
                show && circles.map((circle) => (
                    <motion.div
                        key={circle.id}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: [0.3, 0.5, 0.3, 0],
                            x: [
                                circle.x,
                                circle.x + Math.random() * 50 - 25,
                                circle.x + Math.random() * 50 - 25
                            ],
                            y: [
                                circle.y,
                                circle.y + Math.random() * 50 - 25,
                                circle.y + Math.random() * 50 - 25
                            ],
                            scale: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        style={{
                            backgroundColor: circle.color
                        }}
                        className="absolute rounded-full blur-3xl opacity-40 w-40 h-40"
                    />
                ))
            }
        </div>
    )
};

export default Hover;
