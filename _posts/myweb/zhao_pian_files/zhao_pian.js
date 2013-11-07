// Created by iWeb 3.0.4 local-build-20131107

function createMediaStream_id5() {
    return IWCreatePhotocast("http://www.yaoml.cn/myweb/zhao_pian_files/rss.xml", true);
}
function initializeMediaStream_id5() {
    createMediaStream_id5().load('http://www.yaoml.cn/myweb', function (imageStream) {
        var entryCount = imageStream.length;
        var headerView = widgets['widget1'];
        headerView.setPreferenceForKey(imageStream.length, 'entryCount');
        NotificationCenter.postNotification(new IWNotification('SetPage', 'id5', {pageIndex: 0}));
    });
}
function layoutMediaGrid_id5(range) {
    createMediaStream_id5().load('http://www.yaoml.cn/myweb', function (imageStream) {
        if (range == null) {
            range = new IWRange(0, imageStream.length);
        }
        IWLayoutPhotoGrid('id5', new IWPhotoGridLayout(1, new IWSize(463, 463), new IWSize(463, 30), new IWSize(555, 508), 27, 27, 0, new IWSize(31, 30)), new IWPhotoFrame([IWCreateImage('zhao_pian_files/notebook_ul.png'), IWCreateImage('zhao_pian_files/notebook_top.png'), IWCreateImage('zhao_pian_files/notebook_ur.png'), IWCreateImage('zhao_pian_files/notebook_right.png'), IWCreateImage('zhao_pian_files/notebook_lr.png'), IWCreateImage('zhao_pian_files/notebook_bottom.png'), IWCreateImage('zhao_pian_files/notebook_ll.png'), IWCreateImage('zhao_pian_files/notebook_left.png')], null, 0, 1.000000, 3.000000, 2.000000, 1.000000, 3.000000, 18.000000, 16.000000, 17.000000, 19.000000, 76.000000, 123.000000, 79.000000, 122.000000, null, null, null, 0.400000), imageStream, range, null, null, 1.000000, {backgroundColor: 'rgb(0, 0, 0)', reflectionHeight: 100, reflectionOffset: 2, captionHeight: 100, fullScreen: 0, transitionIndex: 2}, 'Media/slideshow.html', 'widget1', 'widget2', 'widget3')
    });
}
function relayoutMediaGrid_id5(notification) {
    var userInfo = notification.userInfo();
    var range = userInfo['range'];
    layoutMediaGrid_id5(range);
}
function onStubPage() {
    var args = window.location.href.toQueryParams();
    parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id5(), args.id);
}
if (window.stubPage) {
    onStubPage();
}
setTransparentGifURL('Media/transparent.gif');
function hostedOnDM() {
    return false;
}
function onPageLoad() {
    IWRegisterNamedImage('comment overlay', 'Media/Photo-Overlay-Comment.png')
    IWRegisterNamedImage('movie overlay', 'Media/Photo-Overlay-Movie.png')
    loadMozillaCSS('zhao_pian_files/zhao_pianMoz.css')
    adjustLineHeightIfTooBig('id1');
    adjustFontSizeIfTooBig('id1');
    adjustLineHeightIfTooBig('id2');
    adjustFontSizeIfTooBig('id2');
    adjustLineHeightIfTooBig('id3');
    adjustFontSizeIfTooBig('id3');
    adjustLineHeightIfTooBig('id4');
    adjustFontSizeIfTooBig('id4');
    NotificationCenter.addObserver(null, relayoutMediaGrid_id5, 'RangeChanged', 'id5')
    adjustLineHeightIfTooBig('id6');
    adjustFontSizeIfTooBig('id6');
    adjustLineHeightIfTooBig('id7');
    adjustFontSizeIfTooBig('id7');
    fixAllIEPNGs('Media/transparent.gif');
    Widget.onload();
    fixupAllIEPNGBGs();
    fixupIECSS3Opacity('id8');
    initializeMediaStream_id5()
    performPostEffectsFixups()
}
function onPageUnload() {
    Widget.onunload();
}
