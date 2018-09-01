import Vue     from "vue";
import Router  from "vue-router";
import routes  from "./router";
import Submenu from "@/lib/menu";
import util from "@/lib/util";
Vue.use(Router);

const router : any = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

router.beforeEach(( to : any, from: any, next: any) => {
    
    if( to.fullPath == '/'  || to.fullPath == '/login') next()
    
    let navigation : any = []
    Submenu.forEach((item)=>{
        item.menu.forEach( ( nav:any ) =>{
            
            if( nav.name &&  (to.fullPath == nav.name.menuUrl)){
                
                navigation = navigation.concat([
                    { name:item.title , Icon:item.Icon },
                    { name:nav.menuName , Icon:nav.Icon }
                ])

            }else if ( nav.children ) {

                nav.children.forEach( ( threeLevel:any ) =>{
                    
                    if( threeLevel.name.menuUrl == to.fullPath ){
                      
                        navigation = navigation.concat([
                            { name:item.title , Icon:item.Icon },
                            { name:nav.title , Icon:nav.Icon },
                            { name:threeLevel.menuName , Icon:threeLevel.Icon }
                        ])

                    }

                })

            }
        })
    })
    if( navigation.length ) util.openNewPage( router.app , navigation )
    next()
})
  
router.afterEach( ( to: any) => {
    window.scrollTo(0, 0)
})
export default router
