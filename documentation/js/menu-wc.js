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
                    <a href="index.html" data-type="index-link">json-placeholder-app-liseth documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-d1ff6cfdd20b840eccf6b4e4dd6ed502f746a308ea69f33c5ac62e0193fe219d818a6ab188ae4f9b026361172d9cc9f02f2a281b9bcd9b781d375a6849d7f869"' : 'data-bs-target="#xs-components-links-module-AppModule-d1ff6cfdd20b840eccf6b4e4dd6ed502f746a308ea69f33c5ac62e0193fe219d818a6ab188ae4f9b026361172d9cc9f02f2a281b9bcd9b781d375a6849d7f869"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d1ff6cfdd20b840eccf6b4e4dd6ed502f746a308ea69f33c5ac62e0193fe219d818a6ab188ae4f9b026361172d9cc9f02f2a281b9bcd9b781d375a6849d7f869"' :
                                            'id="xs-components-links-module-AppModule-d1ff6cfdd20b840eccf6b4e4dd6ed502f746a308ea69f33c5ac62e0193fe219d818a6ab188ae4f9b026361172d9cc9f02f2a281b9bcd9b781d375a6849d7f869"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComentariosModule.html" data-type="entity-link" >ComentariosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ComentariosModule-3a9ea8194e1c2faf5e4207519b1064fa3ec6566fca35197033e931a24e70746e6bfda90ec562bd1c1e41cd6ec2b7dea9aebf6bc07f3097c52d360ee4c35b480a"' : 'data-bs-target="#xs-components-links-module-ComentariosModule-3a9ea8194e1c2faf5e4207519b1064fa3ec6566fca35197033e931a24e70746e6bfda90ec562bd1c1e41cd6ec2b7dea9aebf6bc07f3097c52d360ee4c35b480a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComentariosModule-3a9ea8194e1c2faf5e4207519b1064fa3ec6566fca35197033e931a24e70746e6bfda90ec562bd1c1e41cd6ec2b7dea9aebf6bc07f3097c52d360ee4c35b480a"' :
                                            'id="xs-components-links-module-ComentariosModule-3a9ea8194e1c2faf5e4207519b1064fa3ec6566fca35197033e931a24e70746e6bfda90ec562bd1c1e41cd6ec2b7dea9aebf6bc07f3097c52d360ee4c35b480a"' }>
                                            <li class="link">
                                                <a href="components/ComentariosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComentariosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComentariosRoutingModule.html" data-type="entity-link" >ComentariosRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductosModule.html" data-type="entity-link" >ProductosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProductosModule-70c0ac755382bc2085b7cf60cf17d7f715dc65b4bdb70bd602decc39addec57f770260e8cef6b34e46e615ab6b54bd208c3362193fc201a08967dfefae7f605c"' : 'data-bs-target="#xs-components-links-module-ProductosModule-70c0ac755382bc2085b7cf60cf17d7f715dc65b4bdb70bd602decc39addec57f770260e8cef6b34e46e615ab6b54bd208c3362193fc201a08967dfefae7f605c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductosModule-70c0ac755382bc2085b7cf60cf17d7f715dc65b4bdb70bd602decc39addec57f770260e8cef6b34e46e615ab6b54bd208c3362193fc201a08967dfefae7f605c"' :
                                            'id="xs-components-links-module-ProductosModule-70c0ac755382bc2085b7cf60cf17d7f715dc65b4bdb70bd602decc39addec57f770260e8cef6b34e46e615ab6b54bd208c3362193fc201a08967dfefae7f605c"' }>
                                            <li class="link">
                                                <a href="components/ProductosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductosRoutingModule.html" data-type="entity-link" >ProductosRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicacionesModule.html" data-type="entity-link" >PublicacionesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PublicacionesModule-a96b15d1730ca8051ed0cbd963146efe0c6f93479aca69952acbaaa6cccfd990e70d4e9ff39c17a8d86c590e03efeb02461910a774ef5c4e6db3131983c72b8c"' : 'data-bs-target="#xs-components-links-module-PublicacionesModule-a96b15d1730ca8051ed0cbd963146efe0c6f93479aca69952acbaaa6cccfd990e70d4e9ff39c17a8d86c590e03efeb02461910a774ef5c4e6db3131983c72b8c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicacionesModule-a96b15d1730ca8051ed0cbd963146efe0c6f93479aca69952acbaaa6cccfd990e70d4e9ff39c17a8d86c590e03efeb02461910a774ef5c4e6db3131983c72b8c"' :
                                            'id="xs-components-links-module-PublicacionesModule-a96b15d1730ca8051ed0cbd963146efe0c6f93479aca69952acbaaa6cccfd990e70d4e9ff39c17a8d86c590e03efeb02461910a774ef5c4e6db3131983c72b8c"' }>
                                            <li class="link">
                                                <a href="components/PublicacionesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublicacionesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicacionesRoutingModule.html" data-type="entity-link" >PublicacionesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TareasModule.html" data-type="entity-link" >TareasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TareasModule-1d9f488ad46f4c7e7e6a18d721a2ca8628fb3d7966d15ef2d93e907194ba12ca5c44e78472ef8581d537781a892b56b8a3f328bcc2de52cbe174025b9853f7a9"' : 'data-bs-target="#xs-components-links-module-TareasModule-1d9f488ad46f4c7e7e6a18d721a2ca8628fb3d7966d15ef2d93e907194ba12ca5c44e78472ef8581d537781a892b56b8a3f328bcc2de52cbe174025b9853f7a9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TareasModule-1d9f488ad46f4c7e7e6a18d721a2ca8628fb3d7966d15ef2d93e907194ba12ca5c44e78472ef8581d537781a892b56b8a3f328bcc2de52cbe174025b9853f7a9"' :
                                            'id="xs-components-links-module-TareasModule-1d9f488ad46f4c7e7e6a18d721a2ca8628fb3d7966d15ef2d93e907194ba12ca5c44e78472ef8581d537781a892b56b8a3f328bcc2de52cbe174025b9853f7a9"' }>
                                            <li class="link">
                                                <a href="components/TareasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TareasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TareasRoutingModule.html" data-type="entity-link" >TareasRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsuariosModule.html" data-type="entity-link" >UsuariosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UsuariosModule-ce2618cd7ed65896a5edea8112d4f376b5eb839e285aa1f390e3b06459f7681e3bbe09342d7ed538bc81d405107a32a9f1a3d0b2ad0804b84491675fe9950c36"' : 'data-bs-target="#xs-components-links-module-UsuariosModule-ce2618cd7ed65896a5edea8112d4f376b5eb839e285aa1f390e3b06459f7681e3bbe09342d7ed538bc81d405107a32a9f1a3d0b2ad0804b84491675fe9950c36"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsuariosModule-ce2618cd7ed65896a5edea8112d4f376b5eb839e285aa1f390e3b06459f7681e3bbe09342d7ed538bc81d405107a32a9f1a3d0b2ad0804b84491675fe9950c36"' :
                                            'id="xs-components-links-module-UsuariosModule-ce2618cd7ed65896a5edea8112d4f376b5eb839e285aa1f390e3b06459f7681e3bbe09342d7ed538bc81d405107a32a9f1a3d0b2ad0804b84491675fe9950c36"' }>
                                            <li class="link">
                                                <a href="components/UsuariosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuariosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsuariosRoutingModule.html" data-type="entity-link" >UsuariosRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Comentarios.html" data-type="entity-link" >Comentarios</a>
                            </li>
                            <li class="link">
                                <a href="classes/Productos.html" data-type="entity-link" >Productos</a>
                            </li>
                            <li class="link">
                                <a href="classes/Publicaciones.html" data-type="entity-link" >Publicaciones</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tareas.html" data-type="entity-link" >Tareas</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuarios.html" data-type="entity-link" >Usuarios</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ComentariosService.html" data-type="entity-link" >ComentariosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductosService.html" data-type="entity-link" >ProductosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PublicacionesService.html" data-type="entity-link" >PublicacionesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TareasService.html" data-type="entity-link" >TareasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuariosService.html" data-type="entity-link" >UsuariosService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Address.html" data-type="entity-link" >Address</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ComentariosInterface.html" data-type="entity-link" >ComentariosInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Geo.html" data-type="entity-link" >Geo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductosInterface.html" data-type="entity-link" >ProductosInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PublicacionesInterface.html" data-type="entity-link" >PublicacionesInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TareasInterface.html" data-type="entity-link" >TareasInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsuariosInterface.html" data-type="entity-link" >UsuariosInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});