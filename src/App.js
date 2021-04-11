import { useDisclosure } from "@chakra-ui/hooks"
import { usePopper } from "@chakra-ui/popper"
import { motion, AnimatePresence } from "framer-motion"

export function Example() {
  // 2. Create toggle state
  const { isOpen, onToggle } = useDisclosure()

  // 3. Create motion variants
  const slide = {
    exit: {
      y: -2,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
  }

  // 4. Consume the `usePopper` hook
  const { getPopperProps, getReferenceProps, getArrowProps, transformOrigin } = usePopper({
    placement: "bottom-start",
  })

  return (
      <>
        <button {...getReferenceProps({ onClick: onToggle })}>Toggle</button>
        <div {...getPopperProps()}>
          <AnimatePresence>
            {isOpen && (
                <motion.div
                    transition={{
                      type: "spring",
                      duration: 0.2,
                    }}
                    variants={slide}
                    initial="exit"
                    animate="enter"
                    exit="exit"
                    style={{
                      background: "red",
                      width: 200,
                      transformOrigin,
                      borderRadius: 4,
                    }}
                >
                  Testing
                  <div
                      {...getArrowProps({
                        style: {
                          background: "red",
                        },
                      })}
                  />
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
  )
}
