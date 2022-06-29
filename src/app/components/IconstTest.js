import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IconTest() {

  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <motion.div layout className="handle">
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.i
            className={`icon far fa-${isOn ? 'moon' : 'sun'}`}
            key={isOn ? 'moon' : 'sun'}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: .2 }}
          />
        </AnimatePresence>
      </motion.div>
    </div>
  )
}