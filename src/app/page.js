const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "МЕДИРЕН® таблетки №60",
  description:
    "Комбинированный растительный препарат для лечения заболеваний почек и мочевыводящих путей. Мочегонное, спазмолитическое, противовоспалительное, противомикробное действие.",
  image: "https://mediren.uz/mediren.webp",
  brand: {
    "@type": "Brand",
    name: "Spring Pharmaceutic",
  },
  manufacturer: {
    "@type": "Organization",
    name: 'ООО "SPRING PHARMACEUTIC"',
    address: {
      "@type": "PostalAddress",
      addressCountry: "UZ",
      addressRegion: "Наманганская область",
      addressLocality: "Касансайский район",
      streetAddress: "Кукимбой, Навбахор МСГ, улица Булак, дом 129",
    },
    telephone: "+998996942363",
    email: "spring_pharmaceutic@gmail.com",
    sameAs: [
      "https://www.instagram.com/springpharmaceutic/",
      "https://www.facebook.com/spring.pharm.3/",
      "https://t.me/SpringPharmaceutic",
    ],
  },
  category: "Фитопрепараты, урология",
  url: "https://mediren.uz",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="xl:max-w-[1110px] my-0 mx-auto w-[90%]">
        <div className="h-[80px] flex items-center justify-between">
          <a href="#">
            <img
              height={50}
              width={100}
              className={"block md:hidden"}
              src="/mediren-logo.svg"
              alt="mediren"
              loading={"lazy"}
            />
            <img
              width={250}
              height={200}
              className={"hidden md:block"}
              src="/mediren-logo.svg"
              alt="mediren"
              loading={"lazy"}
            />
          </a>
          <h3 className="text-[11px] md:text-[18px] md:block font-medium">
            Tel: +998 99 694 23 63
          </h3>
        </div>
        <div className="mt-[50px]">
          <h2 className="font-semibold text-center text-4xl font-roboto">
            « МЕДИРЕН ® »
          </h2>
          <div className="flex justify-center flex-wrap md:flex-nowrap md:items-end">
            <img
              height={600}
              width={600}
              className="hidden md:block"
              src="/mediren.webp"
              alt="инвиреп"
              loading={"lazy"}
            />
            {/* <img
              height={600}
              width={600}
              className="hidden md:block w-[500px] h-[500px]"
              src="/mediren.png"
              alt="инвиреп"
              loading={"lazy"}
            /> */}
            <img
              height={300}
              width={300}
              className="block md:hidden"
              src="/mediren.webp"
              alt="Invirep"
              loading={"lazy"}
            />

            {/*<img*/}
            {/*    className="h:[50vh] md:h-[60vh]"*/}
            {/*    src="/Invirep.webp"*/}
            {/*    alt="invirep, ИНВИРЕП"/>*/}
          </div>
          <h3 className="text-xl md:text-2xl mt-5 text-[#0C54A0] font-semibold font-roboto mb-3">
            ИНСТРУКЦИЯ ПО МЕДИЦИНСКОМУ ПРИМЕНЕНИЮ
          </h3>
          <div className="text-[14px] md:text-[16px] font-roboto font-light">
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">МЕДИРЕН® таблетки №60</span>
              </strong>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Торговое название: МЕДИРЕН®
                </span>{" "}
              </strong>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Лекарственная форма: </span>{" "}
                таблетка
              </strong>
            </div>
            <div className="mb-4">
              <p className="font-roboto text-[14px] md:text-[16px]">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Форма выпуска, упаковка:
                  </span>
                </strong>{" "}
                Таблетки, покрытые оболочкой, оранжевые, круглые,
                двояковыпуклые, с гладкой поверхностью.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Состав препарата:</span>
              </strong>
              <table className="border-collapse border border-slate-300 w-full mt-3 mb-3 text-[14px]">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="border border-slate-300 text-left px-3 py-2">
                      Активные компоненты:
                    </th>
                    <th className="border border-slate-300 text-center px-3 py-2">
                      1 таб.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="border border-slate-300 px-3 py-2"
                      colSpan={2}
                    >
                      измельченное лекарственное растительное сырье (порошок):
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      золототысячника трава (Centaurii herba)
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      18 мг
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      любистока лекарственного корни (Levisticii officinalis
                      radices)
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      18 мг
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      розмарина обыкновенного листья (Rosmarini officinalis
                      folia)
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      18 мг
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="font-medium">
                Вспомогательные вещества: воск горный гликолевый, глюкоза
                жидкая, декстрин, кальция карбонат, касторовое масло
                нерафинированное, крахмал кукурузный, кремния диоксид коллоидный
                безводный, лактозы моногидрат, магния стеарат, повидон K30,
                рибофлавин (E101).
              </p>
              <p className="mt-2 font-medium">
                20 шт. - блистеры (3) - пачки картонные.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Группа: </span>
                <span className="underline">
                  Фитопрепарат, применяемый при заболеваниях почек и
                  мочевыводящих путей
                </span>
              </strong>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Терапевтическая группа: </span>
                <span className="underline">
                  Средства, применяемые в урологии; другие средства, применяемые
                  в урологии
                </span>
              </strong>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Действие</span>
              </strong>
              <p className="mt-2 font-medium">
                Механизм действия и свойства Медирен® таблеток, соответствует
                совокупно указанным, аналогичным действующим веществам,
                указанным информацией справочника Видаль. Комбинированный
                препарат растительного происхождения, оказывает мочегонное,
                спазмолитическое, противовоспалительное, противомикробное
                действие.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Показания препарата Медирен®
                </span>
              </strong>
              <ul className="list-disc pl-6 mt-2 space-y-1 font-medium">
                <li>
                  взрослым и детям в возрасте от 6 до 18 лет в комплексной
                  терапии острых и хронических инфекций мочевого пузыря
                  (цистита);
                </li>
                <li>
                  при инфекционном и неинфекционном хроническом воспалении почек
                  (пиелонефрит, гломерулонефрит, интерстициальный нефрит);
                </li>
                <li>
                  в качестве средства, препятствующего образованию мочевых
                  камней (также после удаления мочевых камней).
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Режим дозирования</span>
              </strong>
              <p className="mt-2 font-medium">
                Рекомендуемая доза: 3 раза/сут (утром, днём и вечером) в
                соответствии с приведенной ниже таблицей.
              </p>
              <table className="border-collapse border border-slate-300 w-full mt-3 mb-3 text-[14px]">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="border border-slate-300 px-3 py-2 text-left">
                      Возраст
                    </th>
                    <th className="border border-slate-300 px-3 py-2 text-center">
                      Разовая доза
                    </th>
                    <th className="border border-slate-300 px-3 py-2 text-center">
                      Суточная доза
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      Дети в возрасте 6–11 лет
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      1 таблетка
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      3 таблетки
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      Подростки в возрасте 12 лет и старше, взрослые
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      2 таблетки
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      6 таблеток
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="font-medium">
                Продолжительность лечения зависит от течения заболевания. После
                наступления улучшения (завершения острой фазы заболевания)
                следует продолжить лечение препаратом в течение 2–4 недель.
                Увеличение продолжительности и проведение повторных курсов
                лечения возможно по рекомендациям врача.
              </p>
              <p className="mt-2 font-medium">
                <strong>Дети.</strong> Безопасность и эффективность у детей в
                возрасте от 0 до 6 лет на настоящий момент не установлены.
                Данные отсутствуют.
              </p>
              <p className="mt-2 font-medium">
                <strong>Способ применения</strong>
                <br />
                Таблетку принимают внутрь, независимо от приема пищи, не
                разжёвывая, запивая достаточным количеством воды (например, 1
                стакан). Во время лечения препаратом рекомендуется потребление
                большого количества жидкости.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Побочное действие</span>
              </strong>
              <p className="mt-2 font-medium">
                <span className="font-medium">Со стороны ЖКТ:</span> часто –
                тошнота, рвота, диарея.
              </p>
              <p className="mt-2 font-medium">
                <span className="font-medium">
                  Со стороны иммунной системы:
                </span>{" "}
                частота неизвестна – аллергические реакции. При появлении первых
                признаков аллергической реакции следует прекратить прием
                препарата и обратиться к врачу; при появлении побочных эффектов,
                указанных в инструкции, или их усугублении, или появлении любых
                других побочных эффектов, не указанных в инструкции, необходимо
                обратиться к врачу.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Противопоказания к применению
                </span>
              </strong>
              <ul className="list-disc pl-6 mt-2 space-y-1 font-medium">
                <li>
                  повышенная чувствительность к активным веществам препарата, к
                  другим растениям семейства зонтичные (например, анис,
                  фенхель), анетолу (компонент эфирных масел), и/или к любому из
                  вспомогательных веществ, входящих в состав препарата;
                </li>
                <li>
                  заболевания желудочно-кишечного тракта в фазе обострения (в
                  т.ч. гастрит, язвенная болезнь желудка).
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Применение при беременности и кормлении грудью
                </span>
              </strong>
              <p className="mt-2 font-semibold">Беременность</p>
              <p className="font-medium">
                Применение препарата во время беременности возможно только по
                назначению врача, в случае если предполагаемая польза для матери
                превышает потенциальный риск для плода и ребенка.
              </p>
              <p className="mt-2 font-semibold">
                Период грудного вскармливания
              </p>
              <p className="font-medium">
                Применение препарата в период грудного вскармливания возможно
                только по назначению врача, в случае если предполагаемая польза
                для матери превышает потенциальный риск для ребенка.
              </p>
              <p className="mt-2 font-semibold">Фертильность</p>
              <p className="font-medium">
                Данные о влиянии препарата Медирен® на фертильность у людей
                отсутствуют.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Применение у детей</span>
              </strong>
              <p className="mt-2 font-medium">
                Противопоказано применение препарата в детском возрасте до 6
                лет.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Особые указания</span>
              </strong>
              <p className="mt-2 font-medium">
                Если симптомы заболевания сохраняются, ухудшаются, повторяются
                периодически или появляются новые симптомы, необходимо
                обратиться за консультацией к врачу.
              </p>
              <p className="mt-2 font-medium">
                Необходимо проинформировать пациента, что в случае
                воспалительных заболеваний почек, появления лихорадки, спазмов,
                крови в моче, нарушений мочеиспускания, острой задержки мочи,
                болей при мочеиспускании необходимо обратиться к врачу.
              </p>
              <p className="mt-2 font-medium">
                При отеках, вызванных нарушениями функции сердца или почек,
                потребление большого количества жидкости противопоказано.
              </p>
              <p className="mt-2 font-semibold font-medium">
                Вспомогательные вещества
              </p>
              <p className="font-medium">
                Пациентам с недостаточностью лактазы, дефицитом сахаразы/
                изомальтазы, непереносимостью лактозы, фруктозы или
                глюкозо-галактозной мальабсорбцией не следует принимать препарат
                Медирен®. Возможен прием препарата Медирен®, капли для приема
                внутрь, который не содержит вышеуказанные сахара.
              </p>
              <p className="mt-2 font-semibold font-medium">
                Информация для пациентов с сахарным диабетом:
              </p>
              <p className="font-medium">
                содержание усваиваемых углеводов в разовой дозе (1 таблетка)
                соответствует менее чем 0.04 ХЕ, в максимальной суточной дозе (6
                таблеток) – менее 0.24 ХЕ.
              </p>
              <p className="mt-2 font-semibold font-medium">
                Влияние на способность к управлению транспортными средствами и
                механизмами
              </p>
              <p className="font-medium">
                Применение препарата Медирен® не оказывает влияния на
                способность к выполнению потенциально опасных видов
                деятельности, требующих повышенной концентрации внимания и
                быстроты психомоторных реакций (управление транспортными
                средствами, работа с движущимися механизмами, работа диспетчера
                и оператора).
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Передозировка</span>
              </strong>
              <p className="mt-2 font-medium">
                При передозировке возможно усиление выраженности дозозависимых
                нежелательных реакций.
              </p>
              <p className="mt-1 font-medium">Лечение: симптоматическое.</p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Лекарственное взаимодействие
                </span>
              </strong>
              <p className="mt-2 font-medium">
                Комбинация с антибактериальными средствами возможна и
                целесообразна.
              </p>
              <p className="mt-1 font-medium">
                Исследования взаимодействия с другими лекарственными препаратами
                не проводились.
              </p>
            </div>

            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Условия хранения препарата
                </span>
              </strong>
              <p className="mt-2 text-[14px]">
                Препарат следует хранить в недоступном для детей месте при
                температуре не выше 25°С.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Срок годности препарата</span>
              </strong>
              <p className="mt-2 text-[14px]">
                Срок годности — 2 года.
                <br />
                Не применять по истечении срока годности.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Условия реализации</span>
              </strong>
              <p className="mt-2 text-[14px]">
                Препарат отпускают без рецепта.
              </p>
            </div>
            <div className="mb-4 mt-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Производитель:</span>
              </strong>
              <p className="mt-2 text-[14px]">
                ООО &quot;SPRING PHARMACEUTIC&quot; СП Великобритания.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Местонахождение производителя и адрес места осуществления
                  деятельности:
                </span>
              </strong>
              <p className="mt-2 text-[14px]">
                Республика Узбекистан, Наманганская область, Касансайский район,
                Кукимбой, Навбахор МСГ, улица Булак, дом 129.
                <br />
                Тел.: +998996942363
              </p>
            </div>

            <a
              href="https://www.instagram.com/springpharmaceutic/"
              className="flex gap-3 items-center"
            >
              <img
                src="/Instagram-Logo.wine.svg"
                loading={"lazy"}
                className="w-[30px] h-[30px]"
                alt="instagram"
              />
              @springpharmaceutic
            </a>
            <a
              href="https://www.facebook.com/spring.pharm.3/"
              className="flex gap-3 items-center"
            >
              <img
                src="/Facebook-f_Logo-Blue-Logo.wine.svg"
                loading={"lazy"}
                className="w-[30px] h-[30px]"
                alt="instagram"
              />
              Spring Pharm
            </a>
            <a
              href="https://t.me/SpringPharmaceutic"
              className="flex gap-3 items-center"
            >
              <img
                src="/telegram.webp"
                width={20}
                height={20}
                loading={"lazy"}
                className="w-[20px] h-[20px] ml-1"
                alt="instagram"
              />
              Spring_Pharmaceutic
            </a>
            <a href="#" className="flex gap-3 items-center mb-3">
              <img
                src="/email-svgrepo-com.svg"
                loading={"lazy"}
                className="w-[25px] h-[25px]"
                alt="instagram"
              />
              spring_pharmaceutic@gmail.com
            </a>
            <div className="mb-5 flex gap-3 flex flex-wrap">
              <a
                href="/instruction_ru.docx"
                className="px-3 py-2 bg-green-500 text-white inline-flex items-center gap-2 rounded-lg text-[12px] md:text-[16px]"
              >
                СКАЧАТЬ ИНСТРУКЦИЮ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <g id="Interface / Download">
                    <path
                      id="Vector"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </a>
              {/* <a
                href="/instruction_uz.docx"
                className="px-3 py-2 bg-green-500 text-white inline-flex items-center gap-2 rounded-lg text-[12px] md:text-[16px]"
              >
                СКАЧАТЬ ИНСТРУКЦИЮ НА УЗБЕКСКОМ ЯЗЫКЕ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <g id="Interface / Download">
                    <path
                      id="Vector"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
