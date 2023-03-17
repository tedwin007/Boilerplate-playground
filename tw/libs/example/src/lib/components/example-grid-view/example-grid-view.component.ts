import {Component, Input, OnInit} from '@angular/core';
import {AgGridEvent, ColDef} from 'ag-grid-community';
import {SingleColumnDefs} from "./constants/columsDefs.const";

export enum GridStyleOf {
  Single = 'single-grid',
}

interface IRowData {
  autoJoin: boolean;
  allowToSign: boolean;
  moderator: boolean;
  anyFlagUp: boolean;
  index: number;
  userName: string;
  userGuid: string;
  versionGUID: string;
  mandatory: boolean;
  accountID: number;
  guid: string;
  dailyReminder: boolean;
  userRole: string;
  email: string
}

const rowData: IRowData[] = [{
  "accountID": 9,
  "versionGUID": "Culpa iure et delectus molestias. Praesentium enim quo dolore adipisci placeat provident. Iusto ratione impedit laudantium aperiam dolor sit sed.\n \rAut aut ipsum occaecati. Vero repudiandae dolores sed dolores. Perspiciatis dicta consectetur molestiae quos maiores et blanditiis qui. Voluptates totam architecto nulla corporis ea eius cupiditate. Corporis dolorem quae non rem dolor asperiores et.\n \rBeatae debitis nemo est excepturi aut dolorem doloribus. Minus quo maiores. Quidem nulla eveniet voluptatem distinctio dolorem explicabo explicabo quisquam dolores. Quam velit voluptate maxime sed molestiae rerum omnis sit alias. Sit accusantium exercitationem est cum dignissimos et.",
  "dailyReminder": true,
  "guid": "Eius temporibus est earum quos. Consequuntur cumque placeat delectus voluptas libero in quis nemo iure. Reiciendis doloremque maiores nemo voluptatem illum est officiis exercitationem.\n \rQuibusdam neque quia optio ad ut quae est dolores. Doloremque asperiores veniam praesentium ad. Qui ratione assumenda repudiandae pariatur voluptatem qui nisi non quos. Harum illum in voluptatibus illum. Molestiae voluptates perferendis.\n \rAtque inventore asperiores ut repellat et eum. Qui sed aut architecto quo eveniet nulla sunt debitis. Laudantium assumenda dolor eum natus dignissimos ut voluptate enim nihil. Maxime molestiae quia et est reiciendis distinctio repellendus. Facere rem dolores adipisci aspernatur quia dolorum et facere.",
  "userName": "In molestiae unde et aut et ducimus asperiores beatae non. Non incidunt ex eaque sit sed debitis molestiae eaque. Nihil laudantium nesciunt doloribus repudiandae pariatur quia.",
  "userGuid": "Eum nisi quis ut sed.",
  "userRole": "Aut ratione tempore quo consequatur. Voluptas quia omnis rerum nemo aut. Id doloribus alias eos veritatis cupiditate.",
  "email": "Nulla aut aut a voluptates eius aut dolore. Quidem eos voluptatem magni iusto. Nihil et inventore quod non velit et et corrupti est. Vel quia quibusdam et. Aut et expedita voluptas dolor et nisi odit.",
  "mandatory": false,
  "autoJoin": true,
  "moderator": true,
  "allowToSign": true,
  "anyFlagUp": true,
  "index": 48
}, {
  "accountID": 43,
  "versionGUID": "Corrupti esse doloremque eligendi et. Doloribus et eum aliquid harum modi est accusamus sed. Iste dignissimos et dolorem praesentium ea voluptatem molestiae et officia.",
  "dailyReminder": false,
  "guid": "mollitia",
  "userName": "architecto ex cupiditate",
  "userGuid": "vel",
  "userRole": "Alias eum quas officia neque dolores consequatur neque voluptate earum. Tenetur fuga pariatur sunt consectetur. Et ut non eaque voluptatum aperiam laborum repellendus totam consequatur. Ipsa voluptas atque sapiente quis soluta.",
  "email": "Rerum totam sed non sint eos porro. Ad laudantium aperiam possimus rerum. Dolor minus in eius illum et sit. Quia esse accusantium. Minima praesentium architecto amet laboriosam voluptates sed.\n \rQuae perferendis ut magni ea. Expedita voluptas rerum et reprehenderit possimus eius unde. Et ea inventore minus eius.\n \rVoluptatem maiores eum veniam modi eligendi. Est est non voluptas distinctio. Consequatur ipsam et qui. Est vel voluptas veritatis aut. Odit non maxime voluptatum. Laborum in nesciunt et molestias excepturi dolorem.",
  "mandatory": true,
  "autoJoin": true,
  "moderator": false,
  "allowToSign": true,
  "anyFlagUp": true,
  "index": 12
}, {
  "accountID": 32,
  "versionGUID": "Sunt suscipit aspernatur. Similique illum fuga ea. Rerum consequatur labore non.",
  "dailyReminder": false,
  "guid": "Non corrupti cupiditate labore qui error libero a quaerat.",
  "userName": "Itaque eius libero qui iure tenetur dolores corrupti porro. Accusamus odio est ab voluptatem incidunt vel rem ut. Consequatur necessitatibus velit qui aut.",
  "userGuid": "Tempora eos expedita. Quidem tenetur sequi rem et aspernatur et sint non dolores. Quod aut et similique at exercitationem ipsam veniam et dolorem. Corrupti sed voluptatum qui expedita dolor velit fuga cupiditate veritatis. Quae sunt et. Fugit est rerum voluptates eos ea id error consequatur placeat.",
  "userRole": "Et odio odio porro ullam eum et incidunt. Qui et ad soluta et iste officia aspernatur inventore. Libero velit quisquam delectus voluptatibus dolores hic consequuntur sit. Consequuntur accusamus omnis aut eius qui. Aut neque cumque occaecati ut. Recusandae molestiae eveniet.",
  "email": "Impedit esse est.",
  "mandatory": false,
  "autoJoin": true,
  "moderator": false,
  "allowToSign": true,
  "anyFlagUp": true,
  "index": 0
}, {
  "accountID": 17,
  "versionGUID": "facere",
  "dailyReminder": false,
  "guid": "Animi aut non blanditiis unde ullam hic.",
  "userName": "Qui deleniti molestiae quam et et distinctio repudiandae enim at. Aut cupiditate magnam blanditiis et libero harum quam. Blanditiis blanditiis nam beatae repellat aspernatur sed. Quibusdam et cumque ipsa. Quia harum totam et et. Beatae non nulla.\n \rSed amet nulla aspernatur explicabo veniam pariatur fugiat. Dolor debitis fugit qui laborum saepe. Dignissimos libero voluptas totam. Omnis exercitationem voluptatem saepe autem aut. Id doloremque totam voluptates fugit aperiam deleniti. Tempora nulla voluptatem fugiat.\n \rCulpa quod assumenda velit eaque unde facere quidem maiores. Dolore reiciendis quas. Blanditiis distinctio suscipit totam omnis eaque doloribus cumque. Blanditiis eum repudiandae est autem. A voluptatum accusantium exercitationem optio alias possimus quasi.",
  "userGuid": "Reprehenderit labore at at.",
  "userRole": "quia",
  "email": "Sed ducimus debitis quos voluptate.\nAutem nulla culpa sint est alias ea quis.\nQuisquam in veniam repellat nobis maxime aut omnis laborum.\nAlias tempore odit sequi omnis temporibus odit animi totam eos.",
  "mandatory": false,
  "autoJoin": true,
  "moderator": true,
  "allowToSign": false,
  "anyFlagUp": false,
  "index": 37
}, {
  "accountID": 2,
  "versionGUID": "Accusantium excepturi est mollitia eveniet et ducimus occaecati. Et modi ex quos voluptatem eaque explicabo aut harum explicabo. Cum minima mollitia cumque.\n \rRerum et odit praesentium alias omnis. Alias eos ut eos qui dolorum quo officiis. Ipsam ea perferendis et possimus maxime quaerat deleniti quisquam quis. Dolores soluta quia. Aperiam ratione vel voluptas qui et fugiat id cum labore.\n \rVitae ipsa facilis ipsam. Omnis mollitia consequatur fuga placeat ab consequuntur veniam ut id. Nostrum in quia enim hic mollitia laborum similique sint maiores. Dicta eaque dolores non accusamus repudiandae eum magni iure ad. Reprehenderit quis dolorem est molestiae consequatur quo qui labore.",
  "dailyReminder": false,
  "guid": "Neque non aut qui aliquam commodi. Et tenetur rem recusandae voluptatibus iste voluptatum libero quas. Numquam et nobis ad ipsum sed facere sed. Aut repellendus aut rerum sunt vel reprehenderit neque qui iusto. Autem ipsam impedit nihil.",
  "userName": "Unde cupiditate dicta explicabo est in quasi. Tempore corrupti asperiores mollitia sit quisquam perspiciatis aut molestiae harum.",
  "userGuid": "Aut et accusantium quia repellat numquam perspiciatis consectetur.",
  "userRole": "Eligendi maiores eos exercitationem magni vero nesciunt. Aut est ut voluptatibus est sapiente. Dolor neque corporis in expedita odio et rerum. Dicta et iure eos.",
  "email": "Occaecati magnam qui eius id voluptatum neque minus nihil at.\nOmnis corporis mollitia sed et consequuntur hic dolorum.\nEt accusamus asperiores facilis nesciunt error aperiam nobis dignissimos.\nUt doloribus harum ratione a et aut.\nAut rerum id.",
  "mandatory": false,
  "autoJoin": true,
  "moderator": true,
  "allowToSign": true,
  "anyFlagUp": false,
  "index": 30
}, {
  "accountID": 18,
  "versionGUID": "Distinctio voluptatem magni excepturi.",
  "dailyReminder": false,
  "guid": "Dicta vero iure. Sunt doloribus blanditiis dolorem vitae placeat. Nihil voluptates eligendi debitis eos. Est fuga commodi. Corrupti enim perspiciatis fuga expedita nemo cum omnis odit.",
  "userName": "Necessitatibus qui et earum debitis et ipsa.\nQui ut distinctio.\nSed iusto incidunt corrupti eos.\nInventore nihil cum tempore.",
  "userGuid": "Dolorem exercitationem vero odio facilis culpa.\nEt ut corporis cum aspernatur.\nMinus commodi sed facilis.\nVel et culpa fugit qui.",
  "userRole": "hic",
  "email": "Tempore temporibus numquam quis ea eum sapiente qui. Iusto doloribus impedit eius facere nisi qui similique libero in. Dolor perspiciatis eveniet fugiat illum rerum consequatur. Cumque est omnis rem ipsum totam labore et quae iste. Necessitatibus voluptas consequatur blanditiis. Quas voluptatem neque.",
  "mandatory": true,
  "autoJoin": true,
  "moderator": false,
  "allowToSign": true,
  "anyFlagUp": false,
  "index": 40
}, {
  "accountID": 3,
  "versionGUID": "Accusantium eum ut et illo reprehenderit nihil consequatur.\nSequi qui aut nisi dolore doloribus tenetur.\nQuisquam suscipit eum et est ratione qui perspiciatis veniam minima.\nTempora quia dolores perspiciatis error error maiores.",
  "dailyReminder": false,
  "guid": "fuga aperiam cupiditate",
  "userName": "Ut sequi perspiciatis dignissimos molestiae non quod quia sit. Consequatur et sunt corrupti voluptatum animi earum numquam quia. Quis consequatur debitis rem saepe nihil quis aut quia saepe.\n \rQuam sed et autem ipsum ut. At repellendus cupiditate ut aliquam aut. Cumque eaque vel est.\n \rOmnis cupiditate non dolores. Eum facilis ut excepturi voluptas. Eius fugit repellendus est quia commodi placeat aliquid.",
  "userGuid": "Commodi repellendus accusamus.\nModi quia aut quis ut labore vel occaecati.\nDeleniti architecto ut ut sed possimus quos reiciendis.",
  "userRole": "Dolorem eius vitae vel et ea.",
  "email": "eaque",
  "mandatory": false,
  "autoJoin": true,
  "moderator": true,
  "allowToSign": false,
  "anyFlagUp": false,
  "index": 36
}, {
  "accountID": 6,
  "versionGUID": "Assumenda enim unde minus est et consequuntur.",
  "dailyReminder": false,
  "guid": "Molestias repellat et reprehenderit doloribus.",
  "userName": "Et vero quia minima aut dolorum illo et aut eum. Consequatur quaerat veritatis vero. Excepturi nisi ea nisi quia tempora voluptatibus itaque. Ea ut debitis eum veniam assumenda. Est eaque dolores esse odio inventore accusantium laborum earum. In atque qui fugiat asperiores ab quos vel rerum perferendis.",
  "userGuid": "adipisci consequatur hic",
  "userRole": "Voluptatem magni quia ipsum et. Dolore laudantium est et eaque eligendi. Sed reprehenderit distinctio laborum doloremque. Quo odit consequatur et molestiae illum deleniti totam ut aliquam. Esse eaque officiis quia nemo. Cum magni reprehenderit sit.\n \rSimilique blanditiis earum quos sunt explicabo ipsa. Aut quos praesentium animi enim cupiditate accusamus vero expedita officia. Et excepturi laborum. Cum facilis rerum et quod.\n \rAspernatur sit dignissimos rerum. Nihil dolor doloribus rerum qui. Molestiae atque voluptatum at aperiam voluptatem perspiciatis vitae et fuga. Soluta iusto omnis dolor aperiam quae sit. Molestiae perferendis et nobis libero. Cumque voluptatem dignissimos qui dicta sit ratione quidem voluptatem est.",
  "email": "voluptatem et aspernatur",
  "mandatory": false,
  "autoJoin": false,
  "moderator": true,
  "allowToSign": false,
  "anyFlagUp": false,
  "index": 25
}, {
  "accountID": 28,
  "versionGUID": "Saepe explicabo voluptates et autem error. Et dolor odio odio repellendus. Molestiae enim beatae exercitationem dolorum eum iure ex quibusdam.",
  "dailyReminder": true,
  "guid": "Est fugit sapiente velit perspiciatis. Qui dolorem dolorum. Est et veniam sunt ex. Cumque assumenda explicabo quae temporibus odit ut.",
  "userName": "Recusandae eos est rem ut maiores nisi earum exercitationem.\nSapiente et quidem temporibus.",
  "userGuid": "Suscipit sit quas hic est voluptas rerum dignissimos et et. Vero ut laudantium.",
  "userRole": "Ipsa quam amet quia dolorem ad.",
  "email": "Et fugit eaque aut voluptatum. Porro quae ratione quidem accusamus. Molestiae reprehenderit quas consequatur aspernatur illo dolorum et sit. Ut soluta nihil cumque aut.",
  "mandatory": false,
  "autoJoin": false,
  "moderator": false,
  "allowToSign": false,
  "anyFlagUp": true,
  "index": 0
}, {
  "accountID": 0,
  "versionGUID": "quia",
  "dailyReminder": true,
  "guid": "Dolor suscipit vitae eum in qui quia sed modi amet.",
  "userName": "Eos voluptatem quo provident ab ad modi minima et suscipit.",
  "userGuid": "beatae dicta et",
  "userRole": "quod voluptatem est",
  "email": "Veritatis sed dicta.",
  "mandatory": true,
  "autoJoin": false,
  "moderator": true,
  "allowToSign": false,
  "anyFlagUp": true,
  "index": 20
}, {
  "accountID": 41,
  "versionGUID": "Doloribus non eveniet.",
  "dailyReminder": true,
  "guid": "ratione",
  "userName": "Illo a aut fugiat. Omnis suscipit et eligendi ex ea est laborum sint quisquam. Odit architecto dolor mollitia at.",
  "userGuid": "est",
  "userRole": "Asperiores porro commodi alias nesciunt possimus ut. Ut recusandae quia molestiae. In atque voluptatem et nemo. Molestias maiores animi earum sint est tempora quas et praesentium. Itaque odio ut atque. Id id voluptatem sint vero aliquam vel corporis deserunt.\n \rEst dolorum praesentium recusandae vero animi. Quibusdam est a quibusdam. Magnam sint numquam libero tempora et hic consequuntur.\n \rPlaceat cupiditate impedit aut dignissimos. Provident qui assumenda asperiores a ut porro nobis. Possimus ut ut consequatur. Qui quasi magni. Modi pariatur omnis consequatur non qui delectus ipsam.",
  "email": "Est animi recusandae autem omnis voluptatem aut rerum. Exercitationem maiores ea eum fugit aliquid officiis enim consequatur distinctio. Ducimus doloribus dicta quo. Libero modi delectus velit. Vitae ex animi autem reprehenderit.",
  "mandatory": false,
  "autoJoin": false,
  "moderator": true,
  "allowToSign": true,
  "anyFlagUp": false,
  "index": 15
}, {
  "accountID": 37,
  "versionGUID": "Nulla est molestiae quia aut neque sit vero ducimus quia. Omnis corporis adipisci quos laborum iusto. Laborum dolorem autem laudantium quia id reprehenderit facere. Quia omnis ut.\n \rQuia ratione nemo eaque perspiciatis et et rerum. Velit doloribus dolorem enim praesentium molestias. Vel exercitationem ut nulla optio itaque sapiente in voluptate. Ut nemo quidem et amet officia aut consequatur. Aut qui reprehenderit unde debitis quia ut deserunt repellat ad. Similique quam ab ut.\n \rQui et dolorem in facere. Error enim necessitatibus amet earum nulla ipsum quibusdam qui sed. Facere tenetur inventore voluptates. Harum ut repellendus necessitatibus voluptas deleniti ut harum dolores minus. Adipisci quidem ut maxime nemo.",
  "dailyReminder": false,
  "guid": "Repellat voluptatibus sunt at quia quo quia magnam dolorem sit. Facilis mollitia labore aut provident officia necessitatibus dolorem quo. Aut facilis qui nam est natus fugit molestiae corrupti quidem.\n \rSimilique debitis dolorum. Veniam tempora sit et libero. Tempore eos vitae neque ut ullam atque assumenda.\n \rPerferendis rerum iste neque rerum est aliquam vitae. Qui error hic voluptates expedita dolores impedit ducimus voluptas in. Nihil et reiciendis qui iure exercitationem. Qui quo assumenda. Modi possimus ea qui ducimus sapiente deleniti ipsa odio quos. Beatae aliquid laudantium.",
  "userName": "consequuntur",
  "userGuid": "Totam est repellendus quas voluptas voluptas hic delectus assumenda sit.\nItaque iure quis.",
  "userRole": "Voluptas vitae itaque et excepturi aut quia et. Id enim id vel alias. Voluptatem et aut doloribus. Similique eos ut molestiae. Sint autem earum beatae animi repudiandae. Id ut ipsum inventore ut et consectetur est.",
  "email": "Voluptatem culpa alias iusto tempora eaque enim occaecati. Qui eveniet totam ad sapiente et repellendus. Dolore dignissimos illo error aut ea minus nemo ut.\n \rEa pariatur aspernatur expedita ex ullam architecto omnis. Saepe et id. Consequatur dolorum doloremque.\n \rQuam quisquam delectus assumenda atque vel ut quia. Est reprehenderit est nemo nemo nulla dolorem fuga. Molestiae quia consectetur ab magnam id commodi cumque. Animi perferendis consequatur est velit.",
  "mandatory": true,
  "autoJoin": true,
  "moderator": true,
  "allowToSign": false,
  "anyFlagUp": false,
  "index": 34
}, {
  "accountID": 19,
  "versionGUID": "Maxime voluptatem similique harum et blanditiis illum consectetur.",
  "dailyReminder": true,
  "guid": "Eos vel velit esse beatae earum. Delectus laudantium tempora voluptas. Quibusdam impedit veritatis voluptatem inventore voluptas quia assumenda et aliquid. Est quis dolorum. Maiores similique ratione.\n \rQuo eum velit aut. Et odio cupiditate totam odit qui accusamus. Nihil nemo eos repudiandae qui velit iusto sed. Reiciendis optio quisquam ut molestiae dolor officiis.\n \rConsectetur et et aut maxime. Asperiores beatae autem ut ex qui unde sit. Nam eum eos consequatur perspiciatis et architecto.",
  "userName": "Repellat voluptatem non odio rem. Est omnis possimus. Est aut ut consequatur eligendi maxime dolorum totam sit possimus. Sed necessitatibus rerum reiciendis.\n \rOmnis et impedit accusantium et fuga esse illum eius omnis. Quia rerum sed quisquam. Et perspiciatis accusantium sint ab. Dolorum dolorem ratione fuga temporibus voluptatem odio eius qui. Nam et similique.\n \rTenetur et voluptas dolor aut ipsa in et. Nostrum quia id praesentium. Et illum molestiae omnis praesentium. Omnis aspernatur tempora.",
  "userGuid": "Ipsa necessitatibus necessitatibus laudantium voluptas veritatis dignissimos quia.",
  "userRole": "Quo iusto tempore natus tenetur debitis illo ea.",
  "email": "excepturi",
  "mandatory": false,
  "autoJoin": true,
  "moderator": false,
  "allowToSign": true,
  "anyFlagUp": true,
  "index": 48
}, {
  "accountID": 15,
  "versionGUID": "Sit voluptate et quisquam consequuntur consequatur delectus ut enim provident. Blanditiis iusto consectetur tempora repudiandae tempore mollitia sit. Ut nihil repudiandae. Eos sapiente qui. Corrupti quis veritatis nisi sint aut aliquam sint cumque.\n \rNihil quis eos recusandae nostrum veniam dolores sint reprehenderit. Quo sit dolores aut cum repellendus omnis. Dolor voluptas omnis deserunt eos laborum tempora. Tempore possimus est doloremque exercitationem temporibus voluptatem ea numquam voluptate. Qui veniam accusamus. Voluptatibus provident quia consequatur doloremque consequatur excepturi.\n \rIn quaerat molestiae ut in reiciendis. Perspiciatis veritatis vero similique cum facilis. Illum omnis velit culpa amet saepe animi dolorem.",
  "dailyReminder": true,
  "guid": "Sit officiis magni cumque expedita nihil provident animi. Est assumenda et. Doloremque hic eum provident voluptas minima saepe. Dignissimos voluptas eum fuga.",
  "userName": "Maxime doloribus qui ad.\nAlias incidunt minima ea.\nEos quia illo nulla adipisci.\nMolestiae error dolor sint.",
  "userGuid": "quia",
  "userRole": "Consequatur repudiandae iste ut eos sed odio autem. Iste cumque quasi et consectetur est pariatur enim. Quas eligendi nam ut recusandae sint qui consectetur harum. Molestiae labore officia pariatur ipsum consequatur. Nam voluptatum sed quod et. Provident magnam sit ipsum eligendi quibusdam dicta.\n \rLabore autem omnis nihil voluptas ut debitis omnis explicabo cupiditate. Eos nulla corrupti quia labore eligendi incidunt non illum. Omnis ea dolorem sunt molestiae qui minima tempora laboriosam.\n \rQuia sapiente est exercitationem earum. Ipsa aut labore et quia iste aut est voluptates necessitatibus. Enim minima officiis quos cumque quaerat ut repudiandae voluptas. Iure aut omnis et ut ratione officiis aut qui et. Est ut voluptatum animi quia ea nemo explicabo et odio.",
  "email": "Impedit rem dolor nobis omnis. Laudantium aut placeat vel dolor sint aliquam. Sit aspernatur consequuntur culpa dolores similique sequi. Labore rerum rerum temporibus nam.",
  "mandatory": false,
  "autoJoin": false,
  "moderator": true,
  "allowToSign": true,
  "anyFlagUp": true,
  "index": 40
}];

@Component({
  selector: 'tw-example-grid-view',
  template: `
      <div class="single-grid">
          <ag-grid-angular
                  class="ag-theme-alpine"
                  [ngClass]="gridClass"
                  [rowData]="rowData"
                  (gridReady)="autoSize($event)"
                  [frameworkComponents]="frameworkComponents"
                  [columnDefs]="columnDefs"
          >
          </ag-grid-angular>
      </div>
  `,
  styleUrls: ['./example-grid-view.component.scss'],
})
export class ExampleGridViewComponent implements OnInit {
  private _columnDefs = SingleColumnDefs
  gridClass!: GridStyleOf;
  frameworkComponents = {};
  @Input() rowData = rowData;

  get columnDefs(): ColDef[] {
    return this._columnDefs;
  }

  ngOnInit(): void {
    this.setColumnDefs(SingleColumnDefs);
  }

  autoSize(event: AgGridEvent): void {
    event.api.sizeColumnsToFit();
  }

  setColumnDefs(value: ColDef[], cssClass?: GridStyleOf) {
    this._columnDefs = value;
    if (cssClass) {
      this.gridClass = cssClass;
    }
  }
}
