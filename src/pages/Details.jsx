import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "@/components/data";
import { Button } from "@/components/ui/button";

const Details = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      {products ? (
        <>
          <div className="min-h-screen bg-gradient-to-br py-28 from-purple-100 to-orange-200 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-red-600 text-white p-6"
              >
                <h1 className="text-3xl text-center font-bold">
                  {product.name}
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6"
              >
                <div className="mb-6 overflow-hidden rounded-lg">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                  <p className="text-xl mt-2">
                    
                    {product.price}
                    <span className="text-green-400 p-6">ريال سعودي</span>
                  </p>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 mb-4"
                >
                  {products.description}
                </motion.p>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: isExpanded ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <h2 className="font-semibold text-lg mb-2">Skills:</h2>
                  <ul className="list-disc list-inside">
                    {product.skills.map((skill, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="text-gray-600"
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors duration-200"
                  >
                    {isExpanded ? "Hide Skills" : "Show Skills"}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4  text-white px-4 py-2 rounded-md transition-colors duration-200"
                  >
                    <Link to={product.link} target="_blank">
                      <Button>اطلب الآن</Button>
                    </Link>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </>
      ) : (
        <>Product Not Found</>
      )}
    </div>
  );
};

export default Details;
