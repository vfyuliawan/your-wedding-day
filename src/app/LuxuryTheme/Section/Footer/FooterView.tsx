import { Cover } from "@/app/Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";

interface FooterViewInterface{
  Footer: Cover
}
interface KeyValueFooter{
  Qutes: string;
  Image: string;
  Name: string
}

const FooterView = (props:FooterViewInterface) => {
    return ( 
        <section
        id="footer"
        style={{
          backgroundImage: `url('${props.Footer.img}')`,
          backgroundPosition:'center'

        }}
        className="footer w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white"
      >
        <div className="gradient-overlay"/>
        <main className="inside" style={{position:'relative', top:'200px'}}>
          <h2>Terimakasih</h2>
          <p>
            {props.Footer.quotes}
          </p>
          <h4>Kami Yang Berbahagia</h4>
          <h3>{props.Footer.title}</h3>
        </main>
      </section>
     );
}
 
export default FooterView;