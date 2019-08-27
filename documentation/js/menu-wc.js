'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">payment-back documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-acf2ea632adf62868535b4bd2aa014df"' : 'data-target="#xs-controllers-links-module-AppModule-acf2ea632adf62868535b4bd2aa014df"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-acf2ea632adf62868535b4bd2aa014df"' :
                                            'id="xs-controllers-links-module-AppModule-acf2ea632adf62868535b4bd2aa014df"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/CommerceController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommerceController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/OrderController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ProductController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TransactionController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TransactionController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-acf2ea632adf62868535b4bd2aa014df"' : 'data-target="#xs-injectables-links-module-AppModule-acf2ea632adf62868535b4bd2aa014df"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-acf2ea632adf62868535b4bd2aa014df"' :
                                        'id="xs-injectables-links-module-AppModule-acf2ea632adf62868535b4bd2aa014df"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TransactionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TransactionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommerceModule.html" data-type="entity-link">CommerceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CommerceModule-64d9822249f591e92309587e05f402fd"' : 'data-target="#xs-controllers-links-module-CommerceModule-64d9822249f591e92309587e05f402fd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CommerceModule-64d9822249f591e92309587e05f402fd"' :
                                            'id="xs-controllers-links-module-CommerceModule-64d9822249f591e92309587e05f402fd"' }>
                                            <li class="link">
                                                <a href="controllers/CommerceController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommerceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CommerceModule-64d9822249f591e92309587e05f402fd"' : 'data-target="#xs-injectables-links-module-CommerceModule-64d9822249f591e92309587e05f402fd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommerceModule-64d9822249f591e92309587e05f402fd"' :
                                        'id="xs-injectables-links-module-CommerceModule-64d9822249f591e92309587e05f402fd"' }>
                                        <li class="link">
                                            <a href="injectables/CommerceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CommerceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link">OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrderModule-38cf0c705c9b245af4731cd50005b149"' : 'data-target="#xs-controllers-links-module-OrderModule-38cf0c705c9b245af4731cd50005b149"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-38cf0c705c9b245af4731cd50005b149"' :
                                            'id="xs-controllers-links-module-OrderModule-38cf0c705c9b245af4731cd50005b149"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrderModule-38cf0c705c9b245af4731cd50005b149"' : 'data-target="#xs-injectables-links-module-OrderModule-38cf0c705c9b245af4731cd50005b149"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-38cf0c705c9b245af4731cd50005b149"' :
                                        'id="xs-injectables-links-module-OrderModule-38cf0c705c9b245af4731cd50005b149"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link">ProductModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-c3de2a015c23a7c873aab97cadc65589"' : 'data-target="#xs-injectables-links-module-ProductModule-c3de2a015c23a7c873aab97cadc65589"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-c3de2a015c23a7c873aab97cadc65589"' :
                                        'id="xs-injectables-links-module-ProductModule-c3de2a015c23a7c873aab97cadc65589"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransactionModule.html" data-type="entity-link">TransactionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TransactionModule-dbf324a5e060950971990a149d5e9f5a"' : 'data-target="#xs-controllers-links-module-TransactionModule-dbf324a5e060950971990a149d5e9f5a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TransactionModule-dbf324a5e060950971990a149d5e9f5a"' :
                                            'id="xs-controllers-links-module-TransactionModule-dbf324a5e060950971990a149d5e9f5a"' }>
                                            <li class="link">
                                                <a href="controllers/TransactionController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TransactionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TransactionModule-dbf324a5e060950971990a149d5e9f5a"' : 'data-target="#xs-injectables-links-module-TransactionModule-dbf324a5e060950971990a149d5e9f5a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TransactionModule-dbf324a5e060950971990a149d5e9f5a"' :
                                        'id="xs-injectables-links-module-TransactionModule-dbf324a5e060950971990a149d5e9f5a"' }>
                                        <li class="link">
                                            <a href="injectables/TransactionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TransactionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-7a2d0dbd2f168956e01d503e0ef46326"' : 'data-target="#xs-controllers-links-module-UserModule-7a2d0dbd2f168956e01d503e0ef46326"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-7a2d0dbd2f168956e01d503e0ef46326"' :
                                            'id="xs-controllers-links-module-UserModule-7a2d0dbd2f168956e01d503e0ef46326"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-7a2d0dbd2f168956e01d503e0ef46326"' : 'data-target="#xs-injectables-links-module-UserModule-7a2d0dbd2f168956e01d503e0ef46326"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-7a2d0dbd2f168956e01d503e0ef46326"' :
                                        'id="xs-injectables-links-module-UserModule-7a2d0dbd2f168956e01d503e0ef46326"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Commerce.html" data-type="entity-link">Commerce</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link">Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link">Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductDTO.html" data-type="entity-link">ProductDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/PurchaseDTO.html" data-type="entity-link">PurchaseDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Transaction.html" data-type="entity-link">Transaction</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionDTO.html" data-type="entity-link">TransactionDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/EntityI.html" data-type="entity-link">EntityI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TransactionI.html" data-type="entity-link">TransactionI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});