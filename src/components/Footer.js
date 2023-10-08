import './cart.css'


export default function Footer() {
  return (

 <>
   <section>
    <footer className="text-center text-white">
      {/* <!-- Grid container --> */}
      <div className="container pt-4">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Facebook --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.facebook.com"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="bi bi-facebook"></i></a>

          {/* <!-- Twitter --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://twitter.com/?lang=en-in"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="bi bi-twitter"></i></a>

          {/* <!-- Google --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.google.co.in"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="bi bi-google"></i></a>

          {/* <!-- Instagram --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.instagram.com"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="bi bi-instagram"></i></a>

          {/* <!-- Linkedin --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://in.linkedin.com"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="bi bi-linkedin"></i></a>

          {/* <!-- Github --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="bi bi-github"></i></a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div className="text-center text-dark p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    </section>
 </>

  )
}
