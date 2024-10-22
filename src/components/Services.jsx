import  { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Globe, ShieldCheck, Zap } from "lucide-react"

const services = [
  {
    id: 1,
    name: "Cloud Computing",
    description: "Scalable and flexible cloud solutions for your business.",
    icon: <Globe className="w-10 h-10 text-primary" />,
    features: ["Scalability", "Cost-effective", "Secure"],
    benefits: [
      "Reduce IT costs",
      "Improve collaboration",
      "Enhance data security"
    ]
  },
  {
    id: 2,
    name: "Cybersecurity",
    description: "Protect your digital assets with our advanced security measures.",
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    features: ["24/7 Monitoring", "Threat Intelligence", "Incident Response"],
    benefits: [
      "Prevent data breaches",
      "Ensure business continuity",
      "Maintain customer trust"
    ]
  },
  {
    id: 3,
    name: "AI & Machine Learning",
    description: "Harness the power of AI to drive innovation and efficiency.",
    icon: <Zap className="w-10 h-10 text-primary" />,
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"],
    benefits: [
      "Automate processes",
      "Gain valuable insights",
      "Enhance decision-making"
    ]
  }
]

export default function Component() {
  const [activeTab, setActiveTab] = useState("features")

  return (
    <div className="container mx-auto px-4 py-8" id='services'>
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">أفضل خدماتنا الرقمية</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                {service.icon}
                <Badge variant="secondary">{`Service #${service.id}`}</Badge>
              </div>
              <CardTitle className="text-xl font-bold">{service.name}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="mt-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="benefits" className="mt-4">
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}