import { motion } from "framer-motion";
import { products } from "./data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const MotionButton = motion.button;



export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-blue-600 font-bold text-center mb-8">
        أفضل المنتجات المتاحة
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="flex  flex-col">
           <Link to={`/product/${product.id}`} >
           <CardHeader>
              <CardTitle className="text-xl font-bold md:h-16 ">
                {product.name}
              </CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="aspect-square relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover  rounded-md"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating}
                  </span>
                </div>
                <span className="font-bold text-lg">
                  <span className="text-green-400 font-semibold">SAR</span>{" "}
                  {product.price}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <MotionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md transition-colors"
              >
                اطلب الآن
              </MotionButton>
            </CardFooter>
           </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
