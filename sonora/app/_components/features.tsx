import { type LucideIcon } from "lucide-react"

interface FeaturesProps {
    icon: LucideIcon,
    title: string,
    text: string
}

export default function Features({icon: Icon, title, text} : FeaturesProps){
    return(
        <div className="flex flex-row pt-5">
            <div className="flex justify-center items-center pr-1">
              <Icon className="h-6 w-6 text-purple-400"/>
            </div>
            <div className="flex flex-col ">
              <h1 className="font-bold text-white">
                {title}
              </h1>
              <p className="text-gray-400">
                {text}
              </p>
            </div>
        </div>
    )
}