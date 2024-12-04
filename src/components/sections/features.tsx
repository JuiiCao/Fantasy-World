"use client";

import { motion } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  BoltIcon,
  UserGroupIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "魔法与奇迹的领域",
    description: "欢迎来到一个魔法无处不在的世界，在这里，巫师挥动魔杖就能召唤风暴，女巫的药剂能够治愈一切疾病。我们的幻想世界充满了奇迹，每一次施法都是对未知的探索。",
    icon: ChatBubbleLeftRightIcon,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "神话生物的家园",
    description: "在这个幻想世界里，你将遇见传说中的生物。从智慧的精灵到勤劳的矮人，从威严的龙到神秘的凤凰，每一种生物都有其独特的文化和故事，等待你去发现。",
    icon: CursorArrowRaysIcon,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "神秘的地貌探险",
    description: "我们的世界拥有令人叹为观止的自然奇观。从被遗忘的古老森林到幽深的地下迷宫，每一步都充满了未知和惊喜。准备好你的地图和剑，因为每一次探险都是一次新的冒险。",
    icon: SparklesIcon,
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "多元文化的交融",
    description: "幻想世界是多元文化的大熔炉，每个种族和文化都有其独特的传统和信仰。在这里，你可以体验到不同文化的庆典，学习古老的语言，甚至参与到史诗般的战争中。",
    icon: GlobeAltIcon,
    color: "from-teal-500 to-cyan-500",
  },
  {
    name: "史诗故事的传承",
    description: "每个角落都充满了传奇故事，英雄的传说在这里代代相传。加入我们，成为这些故事的一部分，或者创造你自己的传奇。",
    icon: BoltIcon,
    color: "from-blue-500 to-violet-500",
  },
  {
    name: "魔法物品的寻觅",
    description: "幻想世界中隐藏着无数的魔法物品，每一件都拥有改变世界的力量。寻找传说中的圣剑，或者探索能够赋予你力量的神秘护符。",
    icon: ShieldCheckIcon,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "冒险与荣耀的召唤",
    description: "勇敢的冒险者，我们的世界需要你的勇气和智慧。从寻找失落的宝藏到对抗邪恶的黑暗势力，每一次冒险都是对荣耀的追求。",
    icon: UserGroupIcon,
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    name: "信仰与神祇的指引",
    description: "在幻想世界中，神祇与信仰是生活的重要组成部分。加入一个宗教团体，或者寻找你的神祇，让信仰成为你冒险路上的指引。",
    icon: DocumentTextIcon,
    color: "from-red-500 to-rose-500",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
        <div className="absolute inset-0">
          <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="features-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 .5H32M.5 0V32" fill="none" stroke="rgb(226 232 240 / 0.3)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#features-grid)" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              产品特性
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              为中文用户打造的
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                {" "}AI 助手
              </span>
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              深入理解中文用户需求，精心打造每一个功能特性，只为提供最佳的AI对话体验
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative group">
                  {/* 卡片内容 */}
                  <div className="relative z-10 bg-white rounded-2xl p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
                    {/* 图标背景 */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-300" />
                    <div className="relative">
                      {/* 图标 */}
                      <div className="relative h-12 w-12">
                        <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${feature.color} opacity-10`} />
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                          <feature.icon
                            className={`h-6 w-6 bg-gradient-to-r ${feature.color} [&>path]:fill-transparent [&>path]:stroke-[url(#gradient)] stroke-2`}
                            aria-hidden="true"
                          />
                          <svg width="0" height="0">
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" className="[stop-color:var(--tw-gradient-from)]" />
                                <stop offset="100%" className="[stop-color:var(--tw-gradient-to)]" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      {/* 标题和描述 */}
                      <dt className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* 技术指标 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24 rounded-2xl bg-gray-50 p-8"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">99.9%</div>
              <div className="mt-2 text-sm text-gray-600">服务可用性</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">&lt;100ms</div>
              <div className="mt-2 text-sm text-gray-600">平均响应时间</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <div className="mt-2 text-sm text-gray-600">专业领域覆盖</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">10M+</div>
              <div className="mt-2 text-sm text-gray-600">日对话次数</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;