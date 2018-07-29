Vue.component("blog-component", {
    props: {
        post: Object
    },
    template: `
    <div class="col-lg-4 d-flex align-items-stretch">
        <div class="card">
        <div  class="mybeautifulclass" >
        <img :src="post.imageLink" alt="" class="card-img-top">
        </div>
            <div class="card-body" >
                <div class="card-title" data-toggle="modal" :data-target="'#'+post.guid">
                    {{post.title}}
                </div>
                <button
                <div class="blog-content" v-html="post.description" >
                </div>
                <a :href="post.link" target="_blank" >
                <i class="align-text-bottom fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    </div>
    `
});

Vue.component("blog-component-modal", {
    props: {
        post: Object
    },
    template: `
    <div class="modal fade" :id="post.guid" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{post.title}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" v-html="post.description">
                    
                </div>
                </div>
            </div>
        </div>
    `
});