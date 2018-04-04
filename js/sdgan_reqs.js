window.sdgan = window.sdgan || {};

(function (deeplearn) {
    var cfg = sdgan.cfg;

    // Prompt if no WebGL
    try {
        var math = new deeplearn.NDArrayMathGPU();
    }
    catch (err) {
        cfg.debugMsg('WebGL error: ' + String(err));

        if (confirm(cfg.reqs.noWebGlWarning) === false) {
            cfg.reqs.userCanceled = true;
            cfg.debugMsg('User canceled demo (no WebGL)');
        }

        document.getElementById('webgl').removeAttribute('hidden');
        return;
    }

    // Prompt if mobile
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        if (confirm(cfg.reqs.mobileWarning) === false) {
            cfg.reqs.userCanceled = true;
            cfg.debugMsg('User canceled demo (mobile)');
        }

        document.getElementById('webgl').removeAttribute('hidden');
        return;
    }

})(window.deeplearn, window.sdgan);
