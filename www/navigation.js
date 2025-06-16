const headerHTML = `
    <!-- Header & Navigation -->
    <header class="bg-white shadow-md sticky top-0 z-50">
        <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
            <a href="index.html">
                <img src="pclogo.jpg" alt="Premier Choice Realty Logo" class="h-14">
            </a>
            <div class="hidden md:flex items-center space-x-2 lg:space-x-4">
                <div class="dropdown">
                    <a href="russell-sabadosa.html" class="nav-link">Who We Are <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></a>
                    <div class="dropdown-content">
                        <a href="russell-sabadosa.html">Our Story</a>
                    </div>
                </div>

                <div class="dropdown">
                    <a href="team.html" class="nav-link">Our Team <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></a>
                    <div class="dropdown-content">
                        <div class="dropdown-header">Sales Team</div>
                        <a href="team.html#russell-sabadosa">Russell Sabadosa</a>
                        <a href="team.html#andrew-komarow">Andrew Komarow</a>
                        <a href="team.html#jonathan-beaty">Jonathan Beaty</a>
                        <a href="team.html#badadir-akcam">Badadir Akcam</a>
                        <div class="border-t my-1"></div>
                        <div class="dropdown-header">Rental Team</div>
                        <a href="team.html#chris-lemenski">Chris Lemenski</a>
                        <a href="team.html#b-davenport">B Davenport</a>
                    </div>
                </div>
                
                <div class="dropdown">
                    <span class="nav-link cursor-pointer">Knowledge <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span>
                    <div class="dropdown-content">
                        <a href="understanding-multi-family.html">Understanding Multi-Family Real Estate</a>
                        <a href="understanding-property-management.html">Understanding Property Management</a>
                        <a href="seller-financing.html">Understanding Seller & Unique Financing</a>
                        <a href="best-types-of-loans-for-investment-real-estate.html">What Types of Loans Make the Most Sense</a>
                        <a href="new-england-information.html">What Makes New England Wicked?</a>
                    </div>
                </div>

                <div class="dropdown">
                    <span class="nav-link cursor-pointer">Expertise <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span>
                    <div class="dropdown-content">
                        <a href="community-tours.html">Community Tours</a>
                        <a href="multi-family.html">Multi-Family Purchases</a>
                        <a href="self-storage.html">Self Storage</a>
                        <a href="property-management.html">Property Management</a>
                        <a href="complex-listings.html">Complex Listings</a>
                    </div>
                </div>
                
                <div class="dropdown">
                    <span class="nav-link cursor-pointer">Rentals <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span>
                    <div class="dropdown-content">
                        <a href="tenant-resources.html">Tenant Resources</a>
                        <a href="https://premierchoicerealty.appfolio.com/connect/users/sign_in" target="_blank">Tenant Login</a>
                    </div>
                </div>
                
                <div class="dropdown">
                    <span class="nav-link cursor-pointer">Self Storage <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span>
                    <div class="dropdown-content">
                        <a href="self-storage-resources.html">Self Storage Resources</a>
                        <a href="http://goodtostow.com" target="_blank">Self Storage Portal</a>
                    </div>
                </div>

                <a href="contact-us.html" class="bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700 transition duration-300 whitespace-nowrap text-lg">Contact Us</a>
            </div>
            <button id="mobile-menu-button" class="md:hidden flex items-center">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </nav>
    </header>
`;

const footerHTML = `
    <!-- Footer -->
    <footer class="bg-gray-800 text-white">
        <div class="container mx-auto px-6 py-8 text-center">
            <a href="index.html">
                <img src="pclogo.jpg" alt="Premier Choice Realty Logo" class="h-14 mx-auto mb-4">
            </a>
            <p class="font-semibold">Premier Choice Realty</p>
            <p class="text-gray-400">916 Belmont Ave, Springfield, MA 01108 | Main Office: 413-324-4409</p>
            <div class="flex justify-center space-x-4 mt-4 mb-4">
                 <a href="#" class="text-gray-400 hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg></a>
                 <a href="#" class="text-gray-400 hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
            </div>
            <p class="text-gray-500 text-sm">&copy; ${new Date().getFullYear()} PCRealty.com. All Rights Reserved.</p>
        </div>
    </footer>
`;

document.addEventListener('DOMContentLoaded', function() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});
