var navbar = document.querySelector('#navId')
var footer = document.querySelector('#footer')

contenido.innerHTML +=
    `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Everth Reyes Portafolio</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="">Portfolio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="">Projects <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="">Contact <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href=""> Action</a>
                            <a class="dropdown-item" href=""> Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#"> Something...</a>
                        </div>

                    </li>

                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>

            </div>
        </nav>
`;

cuerpo.innerHTML +=
  `
<div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, repudiandae sunt? Mollitia ratione, quaerat
        dolore omnis dolorum temporibus numquam soluta? Laborum eum repellendus iusto vel delectus voluptate, mollitia
        quasi reiciendis!
    </div>
`

footer.innerHTML +=
    `<footer class="bg-dark py-5 mt-5">
        <!-- place footer here -->
        <div class="container text-light text-center">
            <p class="display-5 mb-3">Portafolio Everth Reyes Espinoza</p>
            <small class="text-white-50">&copy; Copyright by Everth</small>
        </div>

    </footer>`;

