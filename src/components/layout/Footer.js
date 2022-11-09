import React from 'react'

const Footer = () => {
    return (
        <>
            <div class="container-fluid ">
                <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Product</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Blogs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Contact</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
                    </ul>
                    <p class="text-center text-muted">&copy; 2022 Company, Inc</p>
                </footer>
            </div>
        </>
    )
}

export default Footer