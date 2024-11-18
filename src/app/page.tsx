import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                <Image className="card-img-top mb-5 mb-md-0" src="/1.jpg" layout="responsive" width={600} height={700} alt="..." />
              </div>
              <div className="col-md-6">
                  <div className="small mb-1"><a href="https://9lapakjp.fun">8.832.900 Penilaian</a></div>
                <h1 className="display-5 fw-bolder">Link Alternatif Daftar Situs 9LAPAK Gacor Anti Rungkad</h1>
                  <div className="fs-5 mb-5">
                      <div className="deposit">Deposit Min. Rp.10.000</div>
                  </div>
                  <p className="lead">
                  Segera ikut serta di SITUS 9 LAPAK LINK ALTERNATIF DAFTAR KE SITUS 9LAPAK dengan peluang menang yang sangat besar! Di sini, kamu dapatkan melimpah! game seru dengan peluang jp yang menguntungkan setiap magrib Jangan lewatkan keseruan dan jackpot-nya! Yuk daftar dan buktikan sendiri ketenarannya di SITUS 9 LAPAK LINK ALTERNATIF DAFTAR KE SITUS 9LAPAK
                  </p>
                  <div className="d-flex d-block d-lg-flex order-1">
                      <Link href="https://9lapakjp.fun/register" className="button-regist">
                          Daftar Akun VIP
                      </Link>
                      <Link href="https://9lapakjp.fun/login" className="button-login">
                          LOGIN
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}
