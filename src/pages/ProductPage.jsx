import { useParams } from "react-router"
import { useFetchProductByIdQuery } from "../Redux/Api/productApi";
import BreadCrumbs from "../components/BreadCrumbs";
import { ProductPageStyles } from "../styles/ProductPage";
import ProductPageSlider from "../components/ProductPageSlider";

export default function ProductPage() {
    const { id } = useParams();
    const { data, error, isSuccess, isFetching, isLoading } = useFetchProductByIdQuery({
        id
    })

    console.log(data)

    if (isLoading) return <div>Loading initial data...</div>;
    if (!data) return <div>No products found</div>;


    return (
        <>
            <BreadCrumbs text={data.name} />
            <ProductPageStyles>
                {data.images.length > 1 ?
                    <ProductPageSlider images={data.images} className="slider-component"></ProductPageSlider>
                    :
                    <div className="slider-component">
                        <div className="sticky">
                            <div>
                                <img className="main-img" src={data.images[0].url} alt="" />
                            </div>
                        </div>
                    </div>
                }

                {/* <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi provident obcaecati asperiores ipsum aliquam reprehenderit iusto dolorum enim tempora aliquid ducimus atque nemo cupiditate fugiat quibusdam culpa iste, deserunt magnam.
                    Quod reprehenderit, ab facilis officiis rem molestias soluta. Natus, necessitatibus cum? Reprehenderit perferendis omnis obcaecati distinctio officia modi! Quaerat quidem alias ipsum est voluptatum. Impedit culpa enim praesentium est molestias?
                    Eaque, dolor. Tempore obcaecati deserunt rerum magnam totam soluta laboriosam dignissimos fugiat saepe, sunt voluptatum enim excepturi praesentium vel maxime quaerat sed impedit aperiam dolorem asperiores repudiandae, maiores deleniti dicta!
                    Neque recusandae cumque dolor facilis. Nam, totam. Eius nisi eveniet vero repellendus nam assumenda quam itaque voluptatum at pariatur sint illo impedit, et vitae suscipit illum incidunt, animi saepe fugiat.
                    Exercitationem alias incidunt delectus est asperiores ut, aspernatur eligendi omnis sequi. Eos, ut asperiores dolorum officia id magni beatae, magnam nisi alias mollitia in! Reiciendis, vitae eius. Molestias, sint velit.
                    Sapiente dolorem iste quis saepe sit eius nisi quasi quisquam! Molestias autem expedita itaque ex dignissimos saepe reiciendis. A placeat nesciunt unde ipsum nam quo dolore. Natus sed odit beatae?
                    Voluptatem magnam dolorem excepturi, praesentium facilis impedit repellat minima molestias dolores suscipit optio officiis. Explicabo ipsum atque nostrum debitis aliquid iusto veniam, excepturi dignissimos minus temporibus, sint odio saepe dicta?
                    Repudiandae ipsum quasi rem ad, officiis omnis blanditiis ducimus facilis laudantium sit quis assumenda natus illo dicta accusamus recusandae quod nisi itaque, excepturi vel. Nisi repellendus vel et ab doloremque.
                    Magni vitae amet consectetur itaque vero commodi deserunt, iusto voluptas impedit laboriosam accusantium recusandae necessitatibus mollitia ipsa molestias quo quisquam ab veritatis repellat laborum enim similique quibusdam. Culpa, quibusdam voluptas!
                    Expedita, molestias voluptatum. Rem eos quisquam laudantium, incidunt distinctio modi cum ex dolorum atque impedit molestias excepturi itaque repellat dolor magni repudiandae consequuntur, reiciendis ipsum, eaque natus. Aspernatur, culpa a?
                    Perspiciatis maxime voluptatem incidunt, necessitatibus perferendis, sint et at voluptatibus quo nostrum non? Maiores alias saepe iste, ducimus aut labore vero. Maxime eos in, architecto quae ut dolorum repellat modi.
                    Qui cumque expedita provident mollitia eos quas unde molestiae praesentium labore necessitatibus aperiam ipsa possimus nulla consequuntur, rerum quisquam cupiditate accusamus fugit tempore explicabo? Officiis veniam iste nemo rerum veritatis!
                    Nobis fuga sequi cumque animi praesentium iusto aliquam distinctio itaque autem. Nostrum et ex placeat illum dolorum pariatur eaque aperiam expedita? Quasi officia est temporibus, quos facere aut harum mollitia!
                    Quidem, deleniti deserunt! Vitae explicabo veniam ad molestiae consequatur commodi eaque, deleniti maxime labore? Dolor, cum soluta quidem illo accusamus nulla error, ratione fugit commodi et perspiciatis cumque ea magni.
                    At praesentium possimus debitis numquam qui minus nesciunt, ullam hic fugiat magni incidunt fugit maiores quod deleniti nobis aperiam voluptates nostrum totam eius, eveniet, provident sit! Non pariatur in possimus?
                    Quaerat amet cumque esse autem harum. Sint vel quo expedita vitae! Provident, reiciendis tempora harum maxime vitae consequuntur, sint aperiam laudantium error hic quaerat earum ipsa, nemo esse ad nobis.
                    Possimus facilis molestias illo, animi officiis culpa sapiente ipsam reiciendis excepturi natus assumenda esse, maxime libero tempora ducimus sit rerum omnis eum, quia harum accusamus. Aliquam doloremque optio nostrum inventore!
                    Nam omnis esse accusantium quo voluptatum officiis vero repudiandae alias, praesentium explicabo natus non consectetur modi! Eveniet, nisi, repellendus optio, temporibus laudantium quidem asperiores dignissimos sunt blanditiis tenetur accusantium praesentium!
                    Accusamus quia, earum vel debitis temporibus obcaecati praesentium dignissimos aperiam in unde nobis totam quisquam, consectetur exercitationem officia rem, non quasi. Quisquam ab consequatur reprehenderit eaque aspernatur doloribus quis nesciunt.
                    Doloribus itaque, odio nobis unde dolores laudantium veniam illo! Quod, aperiam. Commodi tempore cupiditate, quis iste ipsam culpa perferendis iusto ullam repellat, cumque reprehenderit id nulla labore perspiciatis hic quidem!
                    Sapiente, neque ducimus quos beatae harum fugit dignissimos temporibus, non eum, sit voluptatem? Reiciendis odio, eos dicta ratione, assumenda nesciunt aut ad exercitationem recusandae similique dolores enim delectus tempore facilis.
                    Asperiores dolorem, quia hic excepturi ea voluptas? Iure necessitatibus perferendis qui inventore, quia architecto laudantium dignissimos, assumenda, corporis ipsam eos soluta cupiditate unde ab quasi nam totam nesciunt reprehenderit nobis?
                    Unde repellat sequi ullam quo asperiores, dolorum voluptate veniam. Commodi eligendi sed ipsam eius provident deserunt voluptate eaque minima? Explicabo, sint. Earum tenetur natus quasi, quo modi dolore ut nobis.
                    Eaque, voluptatum aliquam tempore mollitia quod totam obcaecati quam ipsum, consequatur commodi numquam, qui ducimus doloribus repellat quas eius. Odit ipsam fugiat ipsum asperiores nobis iusto architecto assumenda excepturi eligendi.
                    Illo a veritatis, voluptates dolor maxime saepe aperiam! Corporis repellendus iure voluptatem optio, ea numquam nobis aliquid sit voluptas in quidem vitae impedit nam aspernatur, eum vel omnis molestias excepturi.
                    Possimus, quasi qui adipisci fugit porro voluptatibus minus velit necessitatibus obcaecati. Voluptatum fugiat quia odio sint ratione nam est facilis fuga autem. Voluptates minus doloribus blanditiis exercitationem consectetur animi rem?
                    Tempore, illum repellendus a consequuntur quasi maiores modi, maxime praesentium dicta temporibus veniam atque aliquid soluta nulla cupiditate obcaecati nesciunt debitis cum. Quasi consequatur numquam necessitatibus voluptatum odit ipsam in!
                    Enim quidem, reprehenderit hic corrupti harum, nam distinctio numquam quas atque beatae provident accusamus perferendis iusto aliquam minima esse porro eligendi consectetur? Molestias ullam doloribus eveniet? Quasi reprehenderit sapiente impedit!
                    Excepturi, rem nesciunt facere natus voluptates atque quidem! Deleniti distinctio cum nesciunt, soluta aspernatur facere aut eligendi excepturi dolore suscipit veritatis amet beatae, nobis maxime dicta. Magni officiis nesciunt facilis.
                    Ullam consequatur, quae adipisci mollitia libero repellendus soluta nobis odit perferendis, minus rem, expedita autem. Tempora architecto cumque labore soluta aliquam obcaecati similique quo rerum, accusamus quos vel mollitia consequuntur.
                    Unde voluptates veniam necessitatibus non ad, consectetur beatae voluptatibus laudantium nostrum. Autem rerum sunt qui in dolorum pariatur! Ullam placeat quae optio nihil dolor dolores, eius molestias tempore quis laborum.
                    Iste quisquam perspiciatis nam neque odit, nihil enim quia placeat vero quo vitae qui dicta molestias deserunt dolor soluta molestiae sit est fugit inventore at corrupti cumque ipsum amet. Recusandae.
                    Delectus quibusdam, laborum voluptatibus at porro rem labore odit corporis optio iste voluptatem, eligendi ratione maxime expedita dolores sit ad sunt. Accusantium ad quasi velit ab et perferendis, libero nostrum?
                    Ipsam qui illum eligendi expedita corrupti. Facere architecto optio perferendis voluptatem, eos ea rem reiciendis culpa! Placeat illo molestiae quaerat harum dolorum libero blanditiis a dolore laudantium neque, nulla odio.
                    Voluptatum magni, nobis dolor repellendus impedit aut maxime cumque ipsum voluptas magnam facilis iure, minus rem, sed a odit earum nulla non possimus voluptatem? Illum, iste. Quis, quam fugiat? Velit?
                    Ex in ipsa voluptatibus, perferendis eligendi provident dignissimos molestias error ut, recusandae autem sunt, ullam suscipit tempora ratione explicabo magni quas aliquid temporibus! Ut suscipit sequi est assumenda facilis doloremque.
                    Exercitationem, voluptatibus velit. Sunt dolor perferendis, distinctio ut, cum culpa aut laboriosam non excepturi ullam quis porro. Accusamus quod possimus exercitationem quisquam provident dolorem culpa incidunt necessitatibus hic. Sed, laboriosam!
                    Sed distinctio, perspiciatis nemo perferendis incidunt esse, laudantium earum omnis numquam, voluptas rem quos unde! Laudantium numquam dolorum perferendis iste ratione nemo, eius explicabo vitae aperiam nisi, similique a corporis!
                    Nemo vero modi natus tempore vel, pariatur labore minus doloremque totam libero. Quo molestias enim eligendi nostrum repellendus? Veniam exercitationem natus iure? Harum similique corrupti suscipit accusamus numquam incidunt consequatur.
                    Dolor, reprehenderit est? Architecto hic adipisci sunt optio consequatur veniam soluta sapiente libero explicabo minima rem aliquam, non error! Quaerat, labore commodi voluptatem optio expedita reiciendis porro ipsa possimus! Necessitatibus.
                    Quia, rerum architecto totam molestias alias debitis ex! Possimus porro eos molestiae. Quisquam architecto magni recusandae dolor pariatur iure aliquam cum, at, exercitationem provident enim odio eveniet. Eum, modi temporibus.
                    Quibusdam asperiores fuga maxime corrupti consequatur, et ducimus molestiae officia a veritatis porro, aperiam modi voluptatibus architecto animi eligendi quo pariatur molestias. Aspernatur animi sequi architecto, eius unde repellat aperiam?
                    Quia repellat velit repellendus quisquam. Sunt sequi laborum possimus quo nisi, ipsa illum facilis nam praesentium consequuntur perferendis quidem ducimus nihil velit architecto iste, earum, tempora recusandae excepturi libero in.
                    Veniam optio dolorem, quisquam, dolor rem similique fugiat accusamus veritatis amet architecto id quae maiores deleniti quaerat sapiente. Rem fuga minus natus odit delectus. Consequatur molestias ad autem deserunt repellendus!
                    Distinctio quasi ex vel esse numquam optio reiciendis explicabo in? Quas at assumenda ad facere velit. Facere dolor libero suscipit aut, tenetur accusantium dignissimos iure at explicabo error! Dolor, inventore?
                    Culpa soluta possimus, temporibus maxime quidem voluptatibus illo, itaque quo et dolores natus quia animi nemo officiis molestias sint neque aperiam optio. Earum sunt culpa iste veniam velit vero dicta?
                    Quas illo dolor dolore necessitatibus in porro ratione iusto eaque. Corrupti, accusamus doloremque consectetur facere, reprehenderit, iure et ipsa hic tempora culpa libero blanditiis fuga itaque obcaecati voluptas nesciunt veritatis?
                    Itaque, blanditiis aliquam. Atque ipsam aliquam alias eius sunt et error dolorem, voluptatem vel numquam nam! Exercitationem sit quia doloremque ex quaerat fuga eaque neque porro molestiae voluptate? Totam, delectus!
                    Architecto libero itaque illo nobis saepe minima velit debitis ab voluptates corrupti suscipit eveniet fugiat, totam est veritatis, pariatur quam culpa magnam, quisquam quas? Dignissimos expedita repellendus et quisquam soluta.
                    Libero ab consequuntur expedita. Tempore voluptatum exercitationem tempora labore dolor minima magni, nam consectetur soluta, nihil odio vitae. Dolorum est consequatur reiciendis laboriosam voluptas temporibus debitis culpa aspernatur! Ipsum, accusamus!
                    Consequuntur, modi obcaecati aut cumque nostrum pariatur molestiae alias, nulla at minus placeat vitae? Praesentium molestiae harum temporibus officiis inventore, eos commodi aperiam, dolorem dolore magni mollitia, voluptate exercitationem facere?
                    Quisquam aliquam esse veritatis laboriosam doloribus similique, placeat officia corporis modi beatae, sit fuga voluptate obcaecati ratione optio explicabo expedita odit libero, molestiae impedit assumenda aspernatur eligendi! Blanditiis, amet ex.
                    Rerum, omnis animi harum dolorem velit aut fuga soluta quia excepturi doloremque ullam qui dolore! Impedit sunt nesciunt adipisci illum sint voluptas culpa enim, provident totam velit laborum, id ducimus.
                    Optio neque facilis laudantium laborum et eos obcaecati, architecto error fuga molestiae magnam repellat nulla id molestias vero. Laudantium unde et, explicabo aliquid sunt nihil fuga impedit maiores nam ipsum.
                    Reprehenderit corporis id aliquam veritatis quia voluptatum, omnis distinctio quidem similique sed commodi delectus quo, quas laboriosam? Architecto voluptatum, ab laudantium eveniet ratione mollitia dolores magni! Nisi corporis aperiam omnis!
                    Ea illum odit nihil architecto dicta et dignissimos incidunt repudiandae adipisci hic! Asperiores cupiditate reprehenderit, maxime labore libero cum ut odio, distinctio rerum at quis sapiente nulla, magnam id minima?
                    Voluptatem assumenda officia unde, vero veniam maxime dolorem consectetur voluptatum placeat dolore facere dicta reiciendis odit ad, error esse sed! Praesentium dicta omnis reprehenderit provident explicabo quia, tempora quaerat sequi!
                    Repellendus nihil quaerat quod, necessitatibus minima omnis beatae temporibus facilis sint, enim minus corrupti, aliquam illo. Alias eveniet dolorum adipisci a dolores sequi ducimus, natus cupiditate, rerum quas dolorem incidunt!
                    Eum exercitationem fuga corporis repellendus nostrum molestias odio delectus, animi iure eligendi provident? Praesentium iste consequatur eveniet voluptas laboriosam corporis eius aperiam sunt voluptate esse, hic ipsa in inventore totam?
                    Tenetur vel earum optio minima a dolorum eius architecto sit cum? Est aspernatur non quisquam. Amet laborum at, obcaecati consequuntur fugiat eum totam aliquam qui eligendi error illum, impedit quas.
                    Nobis sequi eaque itaque, incidunt architecto et. Quod culpa ipsum iste odit dolorem eaque necessitatibus reiciendis beatae? Hic tenetur illum voluptatum molestiae tempore veniam, minus repellat. Voluptate molestias ullam ex!
                    Vero deserunt architecto laudantium dolor cum omnis dolorem totam similique consequatur harum eum obcaecati optio et doloremque fugiat aperiam cupiditate, ipsum delectus ipsam rerum illo. Incidunt voluptates consectetur porro quas.
                    Consectetur laudantium blanditiis, quam quibusdam, soluta voluptatem, ratione labore veniam eum rem est ipsa sit voluptates. Ea assumenda officiis a accusantium laudantium, dignissimos deleniti maxime voluptatem numquam facilis! Reprehenderit, nisi.
                    Enim, iste sint! Quae ratione ducimus corrupti quidem repudiandae minima architecto, aliquid excepturi doloribus nobis inventore fugit ad alias error aliquam, voluptatibus perferendis porro nihil enim officiis, rerum esse qui?
                    Doloremque pariatur, perspiciatis inventore explicabo architecto quisquam. Necessitatibus blanditiis provident ex porro, itaque dolorum quos ipsa consectetur aliquam laboriosam illo corporis, tenetur repellendus vel obcaecati! Quis iure fuga eos nesciunt?
                    Debitis tempora placeat impedit unde reprehenderit eum sequi sapiente. Sed deleniti blanditiis ab, incidunt expedita ratione at molestias nobis consequatur necessitatibus cupiditate maiores non inventore. Placeat corporis odio non dolorum!
                    Eum rerum exercitationem ad id laboriosam deserunt dolore cupiditate, veniam saepe consequatur culpa. Corporis, ex dolore in, perspiciatis ad assumenda vitae eveniet voluptatem harum similique odio! Laudantium quos porro expedita.
                    Beatae voluptatibus illum, obcaecati perferendis quasi omnis exercitationem, laborum neque dolorum sequi perspiciatis voluptas nulla dolore nam rem voluptatum necessitatibus harum quam quo ad, esse quae sint? Sit, illum temporibus!
                    Doloremque totam iusto odio nam deleniti repellendus nostrum beatae consequatur molestiae, eaque consectetur, quam maiores debitis illo. Rem perferendis dignissimos non cupiditate aliquam placeat dolore sint illum praesentium, dolor alias?
                    Deserunt eius libero vero consequatur, in reiciendis repellendus nostrum veritatis explicabo optio minima placeat magni eligendi similique eaque aperiam ratione est molestiae quisquam vitae excepturi. Accusamus molestias accusantium maxime sapiente.
                    Dicta aliquam consequatur nam libero quos a earum quis, dignissimos numquam? Sint odio similique cupiditate distinctio tempora aliquid, asperiores, alias commodi esse reiciendis sit maiores sunt dicta sapiente ea autem!
                    Rerum inventore quasi fugit harum illo officia soluta eos! Quidem optio inventore hic aspernatur repellendus eos suscipit quibusdam dolorem reprehenderit esse perferendis id minus fugiat libero saepe, beatae quas labore?
                    Dolores impedit natus atque suscipit quisquam illo itaque, perferendis, asperiores dignissimos consequatur nihil eos veniam est odio tempore ipsum aperiam dicta consequuntur at ratione veritatis eveniet obcaecati dolore sunt! Eaque?
                    Harum odio eius atque fuga mollitia impedit adipisci doloremque ea expedita, repellendus eum dolor aspernatur amet corporis cupiditate incidunt qui laudantium eveniet tempora ratione quas iusto? Inventore suscipit possimus mollitia?
                    Exercitationem laboriosam ullam, blanditiis dolorem consequuntur deleniti debitis magni quasi officia ex possimus cum inventore dolores ipsam repellendus cumque culpa itaque distinctio fugit suscipit tenetur eveniet? Ad iure quae facere.
                    Rerum est vitae et velit sed. Labore incidunt facilis veritatis odit veniam totam, ullam qui. Accusantium, aut aliquid laudantium, facilis animi labore non rem possimus, quis quos nobis nemo provident?
                    Alias, cum dolore unde ducimus atque, nam praesentium assumenda blanditiis possimus aut dolores quod, voluptate necessitatibus in sequi doloremque minus quas. Rem consequatur quam ad commodi eligendi veritatis dolorum enim.
                    Itaque fugit nesciunt deserunt consequuntur totam, magni, maiores sit repudiandae laudantium, ad nihil nemo voluptas at nobis impedit. Inventore, facilis. Cupiditate, doloremque totam at minima aspernatur amet quae necessitatibus dignissimos.
                    Dolor nostrum cumque hic rem impedit, magni aliquam accusamus dolorem excepturi quia ea? Quia voluptate dignissimos possimus modi cupiditate. Excepturi porro quam earum, totam ut similique! Neque tempora itaque dolor?
                    Illum ipsam, similique, dolore iusto sapiente, odio consectetur odit debitis dignissimos quam sed blanditiis quo eligendi eaque quisquam aperiam earum eos quia aliquid rem quibusdam exercitationem quod! Animi, vero et!
                    Provident, omnis aliquid optio, et sed ipsa excepturi iure voluptate iusto, distinctio reiciendis dicta quis? Iste delectus eum porro odio nisi ullam quo iure rem officiis quasi, ipsum natus animi?
                    Nulla eum sapiente quia suscipit facere, repellat officiis similique hic temporibus delectus voluptatum assumenda vero consectetur dicta, dolore quod minus natus voluptatem porro repellendus ipsam ab? Fugiat repudiandae ratione architecto.
                    Dolorem sint odit alias expedita nihil impedit libero neque voluptatum eligendi unde, porro fugit eaque error enim maiores ducimus eius, excepturi, ut velit reprehenderit. Iusto magni fugit hic corporis ea.
                    Beatae impedit nulla fugiat obcaecati magni sint libero. Vel veniam laudantium suscipit consectetur corporis temporibus in aliquam tempore. Commodi repellendus molestias magni distinctio earum veniam explicabo maiores ex eaque nam!
                    Atque quo velit distinctio voluptatum eos veniam quis magnam beatae nesciunt quos. Voluptas distinctio perspiciatis nihil, a incidunt amet blanditiis suscipit enim expedita laboriosam repudiandae tempore, magni facilis nobis laudantium.
                    Aliquam nihil quae molestiae at suscipit atque ab delectus omnis. Perferendis dolore iste autem nesciunt pariatur numquam minus minima enim magnam officiis doloribus, maiores corrupti ex omnis dolorum nam non?
                    Porro non illo odit sit eos dolor. Beatae placeat facere quas, eos molestias harum enim eligendi, excepturi sint aliquid nulla voluptate veritatis ea repellendus quam quasi commodi cupiditate atque dolorem?
                    Atque necessitatibus ullam eveniet obcaecati quasi. Quia sapiente dolores distinctio provident minima ipsum culpa fuga quis iure error id architecto, ratione quisquam adipisci facere quas veritatis est consequuntur soluta sint!
                    Dignissimos, ullam. Temporibus amet aut commodi quos, assumenda ipsa iure, animi id aliquam odit perspiciatis, culpa neque veniam magnam ipsam repudiandae ad molestias error explicabo enim! Ullam maxime perspiciatis quasi!
                    Neque consequatur voluptatibus in, architecto nostrum corrupti aspernatur odio impedit, molestiae perferendis repellat odit exercitationem laudantium fuga animi provident explicabo, quia eius cupiditate at eveniet recusandae voluptates nemo? Nisi, maxime.
                    Iure autem sunt unde blanditiis tenetur, ex distinctio non sint suscipit hic, debitis sit amet ducimus quo? Nisi quasi quo corrupti sunt, ut, enim illum numquam sapiente dolore consectetur alias!
                    Quibusdam magnam reiciendis sint ratione, rem necessitatibus eligendi libero sapiente deleniti ipsam, natus animi architecto ullam blanditiis odio illum atque molestiae inventore magni fugit illo qui earum mollitia vel. Animi!
                    Mollitia fugiat dolorem velit facilis assumenda iste aliquam harum laudantium at vero obcaecati soluta, voluptate consectetur molestias reprehenderit excepturi quaerat dolorum accusamus, earum cum aperiam possimus maiores consequatur. Sed, architecto.
                    Amet officia porro perspiciatis, nemo nobis impedit quod recusandae atque. Nisi modi nostrum cum officiis libero? A veritatis deleniti quia voluptate dignissimos delectus, natus neque dolores amet odit earum voluptatum?
                    Nulla iste assumenda non adipisci expedita natus harum repellendus, corporis repellat maxime asperiores quisquam eius quod est quo excepturi sint ad ipsa! Incidunt ipsa quod impedit, molestias ea in doloremque.
                    Dolore consequatur autem, doloribus officiis accusamus sapiente laboriosam labore quidem tempora eum ratione, minima quis. Laborum iure doloremque esse sit maiores, quod ipsam officiis fugit quibusdam, sed reiciendis. Velit, nobis?
                    Minus, cupiditate enim. Distinctio reiciendis placeat blanditiis aperiam id voluptas ad dolore corrupti! Voluptas ex quis, dolorem velit fugit et modi repellendus, quo, aspernatur similique beatae eveniet culpa earum omnis.
                    Atque earum eveniet voluptate ullam nulla nostrum inventore quae, eos, delectus porro temporibus maxime consequatur rerum totam cum quis dignissimos iure iusto blanditiis doloremque hic enim nemo quam. Dolorum, ducimus?
                    Itaque culpa exercitationem autem, dolorem aliquam cum eius, impedit aperiam, non ea velit quas! Exercitationem vitae illum sit enim quas, quos excepturi deserunt repellendus quasi perferendis omnis a ea at?
                    Eos ex cupiditate fuga eius amet voluptate quasi harum tempore commodi voluptatum. Veritatis perspiciatis blanditiis quis neque! Cupiditate dolore minus, hic optio numquam laboriosam maiores dicta aliquam sequi mollitia eius?</span> */}
            </ProductPageStyles>
        </>
    )
}