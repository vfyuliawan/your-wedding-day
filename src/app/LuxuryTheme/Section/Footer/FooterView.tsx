import { Cover } from "@/app/Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";

interface FooterViewInterface {
  Footer: Cover;
}
interface KeyValueFooter {
  Qutes: string;
  Image: string;
  Name: string;
}

const FooterView = (props: FooterViewInterface) => {
  return (
    <section
      id="footer"
      style={{
        backgroundImage: `url('${props.Footer.img}')`,
        backgroundPosition: "center",
      }}
      className="footer w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white"
    >
      <div className="gradient-overlay" />
      <main className="inside" style={{ position: "relative", top: 300 }}>
      <h2 style={{ textShadow: 'none  !important' }}>Terimakasih</h2>
        <p style={{ textShadow: 'none !important' }}>{props.Footer.quotes}</p>
        <h4 style={{ textShadow: 'none !important', fontSize:13 }}>Kami Yang Berbahagia</h4>
        <h3 style={{ textShadow: 'none !important' }}>{props.Footer.title}</h3>
      </main>
    </section>
  );
};

export default FooterView;
