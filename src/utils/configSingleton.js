class configSingleton{
    constructor(){
        if(!configSingleton._instance){
            configSingleton._instance = this;
        }
        return configSingleton._instance;
    }
    static getInstance() {
        return this._instance;
    }
}
export default configSingleton;