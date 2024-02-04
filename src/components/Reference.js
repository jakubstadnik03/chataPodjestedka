import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const ReferencesPage = () => {
  const references = [
    {
      date: "Podzim 2022",
      name: "MN s více rodinami",
      rating: "100%",
      description:
        "Komunikace s paní majitelkou byla perfektní, včetně domluvy občerstvení. Dostali jsme spoustu tipů na výlety v okolí a stejně tak se mnou paní majitelka prošla celou chatu, ukázala co a jak funguje. Chata je na krásném místě, vkusně zařízená a dostatečně vybavená, vše fungovalo jak má a pobyt jsme si moc užili. Stodola ve které jsme mohli mít večer oheň a zábavu bez rušení spících dětí je skvělý bonus.",
    },
    {
      date: "Jaro 2023",
      name: "Petr s rodinou",
      rating: "100%",
      description:
        "Byl jsem různě po republice ubytovaný už v mnoha chalupách a Podještědka se s přehledem řadí do mého TOP 3. Přestože se objekt nenachází úplně na samotě, máte naprosté soukromí. Když nechcete, nikoho neuvidíte. K dispozici je menší zahrada přímo u chalupy, přes ulici pak zahrada velká i s ohništěm. Samotná chalupa je velice útulná a komfortní - každý pokoj má vlastní koupelnu. V přízemí se pak nachází prostorná a plně vybavená kuchyně s velkým stolem. Pro společné večery u piva a grilu je k dispozici krásně zrekonstruovaná stodola, která je hned vedle chalupy, ale zároveň natolik bokem, že do noci bavící se společnost neruší nikoho, kdo se již odebral do peřin. Velmi doporučuji a těším se na příště.",
    },
    {
      date: "Podzim 2017",
      name: "Michal se skupinou přátel",
      rating: "100%",
      description:
        "Chalupa je umístěna uprostřed krásné vesničky Rozstání, dobrý výchozí bod pro výlety do okolí (pěšky, kolo). Je velmi prostorná a ideální pro pobyt s přáteli, necítili jsme se zde vůbec omezeni prostorem, ačkoliv jsme byly 3 rodiny. Krásně opravená stodola pro večerní posezení u grilu, vůbec nerušíte děti uvnitř domu. Doporučuji.",
    },
    {
      date: "Podzim 2022",
      name: "MN s více rodinami",
      rating: "100%",
      description:
        "Komunikace s paní majitelkou byla perfektní, včetně domluvy občerstvení. Dostali jsme spoustu tipů na výlety v okolí a stejně tak se mnou paní majitelka prošla celou chatu, ukázala co a jak funguje. Chata je na krásném místě, vkusně zařízená a dostatečně vybavená, vše fungovalo jak má a pobyt jsme si moc užili. Stodola ve které jsme mohli mít večer oheň a zábavu bez rušení spících dětí je skvělý bonus.",
    },
    // Adding new references
    {
      date: "Jaro 2018",
      name: "Hana s více rodinami",
      rating: "100%",
      description:
        "Vše bylo velmi příjemné a dokonalé, od majitelky až po celé vybavení chalupy a okolí. Určitě chalupu doporučujeme a těšíme se, že se tam zase někdy podíváme.",
    },
    {
      date: "Léto 2018",
      name: "S více rodinami",
      rating: "100%",
      description:
        "Na této chalupě se nám moc líbilo. Byla nadstandartně vybavená, čistá a moc krásná. Velkou výhodou byla stodola, kde jsme trávili večery a nerušili přitom děti. Okolní příroda tomu dodávala ještě více na kráse. Oplocený pozemek byl ideální, protože děti alespoň nelítaly na cestu. Paní majitelka byla vstřícná a ochotná a dalo se s ní na všem domluvit. Pro velký nákup to bylo cca 20 min do Liberce což bylo super. Určitě doporučuji všem, kteří si chtějí odpočinout v krásně zařízeném objektu a zároveň si vyrazit na nějaký ten výlet. Moc děkujeme.",
    },
  ];

  return (
    <Container>
      <h2 className="my-4 text-center">Reference</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {references.map((reference, index) => (
          <Col key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{reference.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {reference.date}
                </Card.Subtitle>
                <Card.Text>{reference.description}</Card.Text>
                <Card.Footer>Celkové hodnocení: {reference.rating}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReferencesPage;
