const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "ФЕРАМИЛ",
  description:
    "ФЕРАМИЛ — комбинированный препарат для лечения и профилактики железодефицитной анемии. Содержит железа сульфат, фолиевую кислоту, витамины B1, B2, B6, C и цинк. Капсулы 3×10.",
  image: "https://feramil.uz/feramil.webp",
  brand: {
    "@type": "Brand",
    name: "Miller Pharm",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Miller Pharm",
    addressCountry: "IN",
  },
  category: "Препараты железа, витамины, лечение анемии",
  url: "https://feramil.uz",
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
              src="/feramil-logo.svg"
              alt="feramil"
              loading={"lazy"}
            />
            <img
              width={250}
              height={200}
              className={"hidden md:block"}
              src="/feramil-logo.svg"
              alt="feramil"
              loading={"lazy"}
            />
          </a>
          {/* <h3 className="text-[11px] md:text-[18px] md:block font-medium">
            Tel: +998 99 694 23 63
          </h3> */}
        </div>
        <div className="mt-[50px]">
          <h2 className="font-semibold text-center text-4xl font-roboto">
            « ФЕРАМИЛ »
          </h2>
          <div className="flex justify-center flex-wrap md:flex-nowrap md:items-end">
            <img
              height={600}
              width={600}
              className="hidden md:block"
              src="/feramil.webp"
              alt="feramil"
              loading={"lazy"}
            />
            {/* <img
              height={600}
              width={600}
              className="hidden md:block w-[500px] h-[500px]"
                  src="/feramil.webp"
              alt="feramil"
              loading={"lazy"}
            /> */}
            <img
              height={300}
              width={300}
              className="block md:hidden"
              src="/feramil.webp"
              alt="feramil"
              loading={"lazy"}
            />

            {/*<img*/}
            {/*    className="h:[50vh] md:h-[60vh]"*/}
            {/*    src="/Invirep.webp"*/}
            {/*    alt="invirep, ИНВИРЕП"/>*/}
          </div>
          <h3 className="text-xl md:text-2xl mt-5 text-[#0C54A0] font-semibold font-roboto mb-3">
            ИНСТРУКЦИЯ ПО МЕДИЦИНСКОМУ ПРИМЕНЕНИЮ ФЕРАМИЛ
          </h3>
          <div className="text-[14px] md:text-[16px] font-roboto font-light">
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Торговое название препарата:{" "}
                </span>
                Ферамил
              </strong>

              <div className="my-2">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Лекарственная форма: </span>
                  капсулы
                </strong>
              </div>

              <div className="mb-2">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Состав: </span>1 капсула
                  содержит:
                </strong>
              </div>

              <div className="mb-2">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">активные вещества:</span>
                </strong>
              </div>

              <table
                className="font-roboto font-light font-medium"
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >
                <tbody>
                  {[
                    ["железа сульфат", "150 мг;"],
                    ["фолиевая кислота", "0,5 мг;"],
                    ["аскорбиновая кислота (витамин С)", "50 мг;"],
                    ["тиамина гидрохлорид (витамин В1)", "2,0 мг;"],
                    ["рибофлавин (витамин В2)", "2,0 мг;"],
                    ["пиридоксина гидрохлорид (витамин В6)", "1,0 мг;"],
                    ["никотинамид", "10,0 мг;"],
                    ["цинка сульфата моногидрат", "25 мг"],
                  ].map(([name, dose]) => (
                    <tr key={name}>
                      <td style={{ padding: "2px 0" }}>{name}</td>
                      <td
                        style={{
                          textAlign: "right",
                          padding: "2px 0",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {dose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mb-2">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    вспомогательные вещества:{" "}
                  </span>
                  лактоза, тальк очищенный, аэросил.
                </strong>
                <p className="font-medium">
                  Описание: прозрачные, бесцветные/ бесцветные твёрдые
                  желатиновые капсулы, размера «0», содержащие гранулы розового,
                  белого, красного, коричневого, жёлтого и оранжевого цветов.
                </p>
              </div>

              <div className="mb-2">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Фармакотерапевтическая группа:{" "}
                  </span>
                  Средство, стимулирующее эритропоэз.
                </strong>
              </div>

              <div className="mb-2">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Код АТХ: </span>
                  B03АЕ10
                </strong>
              </div>

              <div className="mb-2">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Фармакологические свойства
                  </span>
                </strong>
              </div>

              <div className="mb-2">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Фармакодинамика</span>
                </strong>
              </div>

              <div className="">
                {/* Фармакодинамика */}
                <div className="mb-4">
                  <p className="mb-2 font-medium">
                    Ферамил - это комбинированный препарат. В состав препарата
                    Ферамил входит: железо Препарат пополняет дефицит ионов
                    железа в организме при железодефицитных анемиях разного
                    генеза и стимулирует эритропоэз. Железо входит в состав
                    гемоглобина, обеспечивает транспорт кислорода в ткани,
                    является кофактором многих ферментных систем. Потребность в
                    железе увеличивается в период беременности и лактации, при
                    увеличении менструации у девочек пубертатного возраста, у
                    детей в период активного роста, при хронических
                    кровотечениях, а также при заболеваниях желудочно-кишечного
                    тракта, сопровождающихся нарушением процессов всасывания
                    железа. При курсовом лечении наступает постепенная регрессия
                    клинических симптомов (слабость, утомляемость,
                    головокружение, тахикардия, болезненность, сухость кожных
                    покровов) и лабораторных показателей анемии.
                  </p>
                  <p className="mb-1 font-medium">
                    Фолиевая кислота после трансформации в организме в фолиевую
                    кислоту принимает участие в реакциях синтеза нуклеотидов,
                    вместе с витамином В12 регулирует процесс созревания
                    эритроцитов, необходима для осуществления реакций клеточного
                    иммунитета. Цинка сульфат моногидрат как микроэлемент входит
                    в состав ряда ферментов, способствует увеличению уровня АТФ,
                    повышает синтез белка и нуклеиновых кислот, улучшает
                    процессы кроветворение, регенерации тканей, необходимого для
                    нормальной активности лимфоидной ткани. Цинк принимает
                    участие в возобновлении клеток и формировании костной ткани.
                    Необходим для обеспечения процесса продукции энергии путём
                    расщепления углеводов в организме. Цинк повышает
                    сопротивляемость организма к простудным заболеваниям.
                  </p>
                </div>

                {/* Фармакокинетика */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Фармакокинетика</span>
                  </strong>
                  <p className="mt-2 font-medium">
                    Фармакокинетика препарата обусловлена совокупным действием
                    его компонентов.
                  </p>
                </div>

                {/* Показания к применению */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">
                      Показания к применению
                    </span>
                  </strong>
                  <p className="mt-2 font-medium">
                    Железодефицитная анемия, анемия, связана с алиментарной
                    недостаточностью железа. Применяется для профилактики
                    железодефицитной анемии, а также женщинам в периоды
                    беременности и кормления грудью, при хронической кровопотере
                    (геморроидальные кровотечения, пептические язвы в стадии
                    ремиссии, гиперменореи), анкилостомоз, донорство.
                  </p>
                </div>

                {/* Способ применения и дозы */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">
                      Способ применения и дозы
                    </span>
                  </strong>
                  <p className="mt-2 font-medium">
                    Взрослым и детям старше 12 лет - по 1-2 капсуле 1-2 раза в
                    сутки, после еды.
                  </p>
                  <p className="mt-1 font-medium">
                    Продолжительность лечения в среднем составляет 1-3 месяца.
                  </p>
                </div>

                {/* Побочные действия */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Побочные действия</span>
                  </strong>
                  <p className="mt-2 font-medium">
                    Возможны аллергические реакции, тошнота. Наблюдается окраска
                    кала в чёрный цвет.
                  </p>
                </div>

                {/* Противопоказания */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Противопоказания</span>
                  </strong>
                  <p className="mt-2 font-medium">
                    Повышенная чувствительность к любым компонентам препарата,
                    гемохроматоз, гемолитическая анемия, анемии
                    нежелезодефицитного генеза, цирроз, острая почечная
                    недостаточность. Дети до 12 лет.
                  </p>
                </div>

                {/* Лекарственные взаимодействия */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">
                      Лекарственные взаимодействия
                    </span>
                  </strong>
                  <p className="mt-2 font-medium">
                    При приеме Ферамила одновременно с метилдопой, пенициллином,
                    препаратами хинолинового ряда, тетрациклинами может
                    снизиться абсорбция указанных препаратов.
                  </p>
                  <p className="mt-2 font-medium">
                    Одновременное употребление препарата с тироксином может
                    привести к увеличению уровня тиротропина в крови.
                  </p>
                  <p className="mt-2 font-medium">
                    При одновременном приеме Ферамил и антацидных средств может
                    уменьшиться абсорбция железа.
                  </p>
                </div>

                {/* Особые указания */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Особые указания</span>
                  </strong>
                  <p className="mt-2 font-medium">
                    Лечение железодефицитной анемии следует проводить под
                    контролем уровня гемоглобина и содержимого железа в
                    сыворотке крови. Неэффективность терапии может быть
                    обусловлена недостаточностью кровообращения, хроническим
                    алкоголизмом, поли-гипо/авитаминозом.
                  </p>
                </div>

                {/* Передозировка */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Передозировка</span>
                  </strong>
                  <p className="mt-2 font-medium">
                    Тошнота, боль в эпигастральной области и другие симптомы
                    раздражения желудочно-кишечного тракта, головокружение,
                    понижение артериального давления.
                  </p>
                  <p className="mt-1 font-medium">
                    Специфическим антидотом при отравлениях солями железа
                    является дефероксамин, который назначают внутрь и
                    парентерально. При остром отравлении для связывания железа,
                    которое не всосалось из пищеварительного тракта, назначают
                    внутрь 5-10 г дефероксамина каждые 3-12 часов. Дефероксамин
                    можно вводить в мышцу 1 г в сутки в виде 10% раствора.
                  </p>
                </div>

                {/* Форма выпуска */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Форма выпуска</span>
                  </strong>
                  <p className="mt-2 font-medium">
                    10 капсул в блистере из алюминиевой фольги и IIВХ. По 3
                    блистера вместе с инструкцией по медицинскому применению в
                    картонной пачке.
                  </p>
                </div>

                {/* Условия хранения */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Условия хранения</span>
                  </strong>
                  <p className="mt-2 font-medium">
                    Хранить в сухом, защищенном от света месте, при температуре
                    не выше 25°С. Следует хранить в недоступном для детей месте.
                  </p>
                </div>

                {/* Срок годности */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Срок годности</span>
                  </strong>
                  <p className="mt-2 font-medium">2 года.</p>
                  <p className="mt-1 font-medium">
                    Не следует применять после истечения срока годности.
                  </p>
                </div>

                {/* Условия отпуска из аптек */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">
                      Условия отпуска из аптек
                    </span>
                  </strong>
                  <p className="mt-2 font-medium">По рецепту.</p>
                </div>

                {/* Производитель */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Производитель</span>
                  </strong>
                  <p className="mt-2 font-medium">Индия.</p>
                </div>
              </div>

              {/* <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Местонахождение производителя и адрес места осуществления
                    деятельности:
                  </span>
                </strong>
                <p className="mt-2 text-[14px]">
                  Республика Узбекистан, Наманганская область, Касансайский
                  район, Кукимбой, Навбахор МСГ, улица Булак, дом 129.
                  <br />
                  Тел.: +998996942363
                </p>
              </div> */}

              {/* <a
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
              </a> */}
              {/* <a
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
              </a> */}
              {/* <a
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
              </a> */}
              {/* <a href="#" className="flex gap-3 items-center mb-3">
                <img
                  src="/email-svgrepo-com.svg"
                  loading={"lazy"}
                  className="w-[25px] h-[25px]"
                  alt="instagram"
                />
                spring_pharmaceutic@gmail.com
              </a> */}
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
      </div>
    </>
  );
}
