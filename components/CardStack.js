import { cn } from "@/lib/utils";

import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconAlertTriangle,
  IconHourglassEmpty,
  IconPerspective,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "OSS",
      description:
        "Bu yazılımın kodu tamamıyla halka açıktır.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Kullanışlık",
      description:
        "Tamamıyla basit, anlaşılabilir arayüz.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Ücretsiz",
      description:
        "Bu yazılım tamamıyla ücretsizdir, bağışlar ile kendisini yürütür.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Uyarı Sistemi",
      description: "Kullanıcı ses ve görsel şekillerde uyarır.",
      icon: <IconAlertTriangle />,
    },
    {
      title: "Tekrardan Paylaşım",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Hızlılık",
      description:
        "Kullanıcılarımızı uyarı hızı bakımından herhangi bir şekilde abonelik sistemleri ile ayırmıyoruz. Can güvenliği herkesin hakkıdır.",
      icon: <IconHourglassEmpty />,
    },
    {
      title: "Şeffaflık",
      description:
        "Site yapılışından deploy edilmesine kadar sizin bağışlarınızla yürür. Bu konuda şeffaflığımız ön plandadır.",
      icon: <IconPerspective />,
    },
    {
      title: "Ve diğer herşey...",
      description: "Bu site sevgiyle ve herhangi kaar amacı gütmeyecek şekilde tasarlanmıştır.",
      icon: <IconHeart />,
    },
  ];
  return (
    (<div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>)
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    (<div className="">
        <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
    </div>)
  );
};
