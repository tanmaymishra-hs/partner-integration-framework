export const Singleton = (function () {
    let instance;

    return {
        getInstance: function (obj) {
            if (!instance) {
                instance = obj;
            }

            return instance;
        }
    };
})();