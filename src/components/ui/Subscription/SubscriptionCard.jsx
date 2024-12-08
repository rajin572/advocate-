import { buttonVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import { MdOutlineDone } from "react-icons/md";

const SubscriptionCard = ({
  plan,
  index,
  isInView,
  initialMotion,
  visibleMotion,
}) => {
  return (
    <motion.div
      initial={initialMotion}
      animate={isInView ? visibleMotion : {}}
      whileHover={{
        scale: 1.05,
        transition: {
          type: "spring",
          bounce: 0.5,
          duration: 0.5,
        },
      }}
      key={index}
      className="w-full min-h-[600px] max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[400px] flex flex-col justify-between bg-base-color text-white p-7 rounded-3xl shadow-lg"
    >
      <div>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-secondary-color font-bold mb-2">
          {plan.plan}
        </h3>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold mb-10">
          {index === 0 ? (
            <span className="text-xl sm:text-2xl lg:text-3xl">Free</span>
          ) : (
            <span>
              {plan.price}/
              <span className="text-xl sm:text-2xl lg:text-3xl">monthly</span>
            </span>
          )}
        </p>
        <ul className="mb-10">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center gap-2">
              <div className="p-1 rounded-full bg-[#EDE9E9] -mt-4">
                <MdOutlineDone className="size-3 text-base-color" />
              </div>
              <p className="sm:text-lg lg:text-xl text-[#EDE9E9] mb-5">
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileTap="tap"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 7,
          }}
          className="w-full py-3 text-lg sm:text-xl lg:text-2xl rounded-2xl text-white font-bold bg-secondary-color"
        >
          Get Access
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SubscriptionCard;
