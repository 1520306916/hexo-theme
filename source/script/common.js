var page = {
    init: function() {
        //����ҳ���Ч��
        setTimeout(function () {
            page.setPageState(true)
        }, 500);

        page.resetSiteLinks();
    },
    resetSiteLinks: function(){
        /**
         * �õ����е����ӣ�Ȼ���ж��Ƿ���վ������
         * �����վ�����ӣ���ô��ת֮ǰ���һ������Ч��
         * */
        var allLinks = document.getElementsByTagName('a');
        for (var i = 0; i < allLinks.length; i++) {
            if (!allLinks[i].getAttribute("target") || allLinks[i].getAttribute("target") != "_blank"){
                allLinks[i].onclick = function (e) {
                    var that = this;
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                    }
                    page.setPageState(false);
                    setTimeout(function(){
                        location.assign(that.href)
                    }, 500); // �ȴ��������� _variable.scss�е� $page-load-animation
                };
            }
        }
    },
    setPageState: function(enter){
        /**
         * �ı�ҳ��״̬
         *
         * @param enter Ϊ����ֵ���Ƿ����ҳ��
         */
        var frames = [
            document.body,
            document.getElementById('site-menu'),
            document.getElementById('loading'),
            document.getElementById('masthead'),
            document.getElementsByTagName('main')[0],
            document.getElementById('mastfoot')
        ];

        frames.forEach(function(item){
            if (item){
                if (enter){
                    item.className += " load";
                }else{
                    item.className = item.className.replace(" load", "");
                }
            }
        });
    }
};

page.init();