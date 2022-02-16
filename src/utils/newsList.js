import shortid from 'shortid';

const newsList = [
  {
    id: shortid.generate(),
    img: '/images/newsImg.png',
    title: 'Շտապեք գրանցվել հաշվապահական հաշվառում 0-ից դասընթացին',
    text: [
      {
        subId: shortid.generate(),
        subTitle: 'Դասընթացներն իրենց մեջ ներառում են՝',
        subText: [
          {
            id: shortid.generate(),
            text: 'ընդհանուր հաշվապահության մասին տեղեկություն,',
          },
          {
            id: shortid.generate(),
            text: 'հարկային և աշխատանքային օրենսգրքերի ուսումնասիրում,',
          },
          {
            id: shortid.generate(),
            text: 'ՀԾ հաշվապահ և ՀԾ առևտուր/ըստ անհրաժեշտության/ ծրագրերի ուսուցում:',
          },
        ],
      },
      {
        subId: shortid.generate(),
        subTitle: 'Դասընթացն անցկացվում է խմբակային՝ խմբում 6-8 ուսանող։',
      },
      {
        subId: shortid.generate(),
        subTitle:
          'Դասընթացի տևողությունը 5 ամիս, շաբաթական 2 օր։ Դասերն անցկացվում են երեկոյան ժամերին։',
      },
      {
        subId: shortid.generate(),
        subTitle: '📍Առաջին 3 դասերն անցկացվում են անվճար։',
      },
      {
        subId: shortid.generate(),
        subTitle: 'Դասընթացն ավարտած ուսանողները կստանան՝',
        subText: [
          {
            id: shortid.generate(),
            text: 'մեկ տարի պրակտիկ խորհրդատվություն',
          },
          {
            id: shortid.generate(),
            text: 'պրակտիկայի հնարավորություն մեր գրասենյակում',
          },
        ],
      },
      {
        subId: shortid.generate(),
        subTitle: 'Դասընթացի ավարտին տրվում է վկայական։',
      },
    ],
  },
  {
    id: shortid.generate(),
    img: '/images/newsImg.png',
    title: 'Շտապեք գրանցվել հաշվապահական հաշվառում 0-ից դասընթացին',
    text: [
      {
        subId: shortid.generate(),
        subTitle: 'Դասընթացներն իրենց մեջ ներառում են՝',
        subText: [
          {
            id: shortid.generate(),
            text: 'ընդհանուր հաշվապահության մասին տեղեկություն,',
          },
          {
            id: shortid.generate(),
            text: 'հարկային և աշխատանքային օրենսգրքերի ուսումնասիրում,',
          },
          {
            id: shortid.generate(),
            text: 'ՀԾ հաշվապահ և ՀԾ առևտուր/ըստ անհրաժեշտության/ ծրագրերի ուսուցում:',
          },
        ],
      },
      {
        subId: shortid.generate(),
        subTitle: 'Դասընթացն անցկացվում է խմբակային՝ խմբում 6-8 ուսանող։',
      },
      {
        subId: shortid.generate(),
        subTitle:
          'Դասընթացի տևողությունը 5 ամիս, շաբաթական 2 օր։ Դասերն անցկացվում են երեկոյան ժամերին։',
      },
      {
        subId: shortid.generate(),
        subTitle: '📍Առաջին 3 դասերն անցկացվում են անվճար։',
      },
      {
        subId: shortid.generate(),
        subTitle: 'Դասընթացն ավարտած ուսանողները կստանան՝',
        subText: [
          {
            id: shortid.generate(),
            text: 'մեկ տարի պրակտիկ խորհրդատվություն',
          },
          {
            id: shortid.generate(),
            text: 'պրակտիկայի հնարավորություն մեր գրասենյակում',
          },
        ],
      },
      {
        subId: shortid.generate(),
        subTitle: 'Դասընթացի ավարտին տրվում է վկայական։',
      },
    ],
  },
];

export default newsList;
