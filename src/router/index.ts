import { createRouter, createWebHashHistory } from "vue-router"

const Index = () => import("../view/index")
const Guaer = () => import("../view/guaer/Guaer")
const Gen = () => import("../view/gen/Gen")
const TianTian = () => import("../view/ctiantian/TianTian")
const Hu = () => import("../view/hu/Hu")
const Cai = () => import("../view/caicai/Cai")
const Jingli = () => import("../view/jingli/index")
const Kms = () => import("../view/kms/index")
const Pengpeng = () => import("../view/pengpeng/index")
const Pi = () => import("../view/pi/index")
const Xxie = () => import("../view/xxie/index")

const routes = [
  { path: "/", name: "Home", component: Index },
  { path: "/Guaer", component: Guaer },
  { path: "/Gen", component: Gen },
  { path: "/CTianTian", component: TianTian },
  { path: "/Dhu", component: Hu },
  { path: "/cai", component: Cai },
  { path: "/jingli", name: "Jingli", component: Jingli },
  { path: "/kms", name: "Kms", component: Kms },
  { path: "/pengpeng", name: "Pengpeng", component: Pengpeng },
  { path: "/pi", name: "Pi", component: Pi },
  { path: "/xxie", name: "Xxie", component: Xxie },
]

const router = createRouter({ history: createWebHashHistory(), routes })
export default router