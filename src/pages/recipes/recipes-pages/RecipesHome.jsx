import Veggie from "../recipes-components/Veggie";
import Popular from "../recipes-components/Popular";
import { motion } from 'framer-motion';

function RecipesHome() {
    return (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
            <Veggie />
            <Popular />
        </motion.div>
    )
}

export default RecipesHome;