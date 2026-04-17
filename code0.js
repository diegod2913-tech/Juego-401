gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.GDMedievalButtonBeigeObjects1= [];
gdjs.menuCode.GDMedievalButtonBeigeObjects2= [];
gdjs.menuCode.GDAreariesgoObjects1= [];
gdjs.menuCode.GDAreariesgoObjects2= [];
gdjs.menuCode.GDNewTiledSpriteObjects1= [];
gdjs.menuCode.GDNewTiledSpriteObjects2= [];
gdjs.menuCode.GDGordonObjects1= [];
gdjs.menuCode.GDGordonObjects2= [];
gdjs.menuCode.GDDino_9595MortObjects1= [];
gdjs.menuCode.GDDino_9595MortObjects2= [];
gdjs.menuCode.GDFloater_9595enemyObjects1= [];
gdjs.menuCode.GDFloater_9595enemyObjects2= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects1= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects2= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2= [];
gdjs.menuCode.GDSummer_9595BackgroundObjects1= [];
gdjs.menuCode.GDSummer_9595BackgroundObjects2= [];
gdjs.menuCode.GDtrigger_9595arribaObjects1= [];
gdjs.menuCode.GDtrigger_9595arribaObjects2= [];
gdjs.menuCode.GDtrigger_9595abajoObjects1= [];
gdjs.menuCode.GDtrigger_9595abajoObjects2= [];
gdjs.menuCode.GDtrigger_9595derechaObjects1= [];
gdjs.menuCode.GDtrigger_9595derechaObjects2= [];
gdjs.menuCode.GDtrigger_9595izquierdaObjects1= [];
gdjs.menuCode.GDtrigger_9595izquierdaObjects2= [];
gdjs.menuCode.GDAreaRiesgoObjects1= [];
gdjs.menuCode.GDAreaRiesgoObjects2= [];
gdjs.menuCode.GDGold_9595CoinObjects1= [];
gdjs.menuCode.GDGold_9595CoinObjects2= [];
gdjs.menuCode.GDHeartObjects1= [];
gdjs.menuCode.GDHeartObjects2= [];
gdjs.menuCode.GDSpikesObjects1= [];
gdjs.menuCode.GDSpikesObjects2= [];
gdjs.menuCode.GDbloquefantasmaObjects1= [];
gdjs.menuCode.GDbloquefantasmaObjects2= [];
gdjs.menuCode.GDNewTextObjects1= [];
gdjs.menuCode.GDNewTextObjects2= [];
gdjs.menuCode.GDFireballObjects1= [];
gdjs.menuCode.GDFireballObjects2= [];
gdjs.menuCode.GDfireballObjects1= [];
gdjs.menuCode.GDfireballObjects2= [];
gdjs.menuCode.GDsubvida_9595tituloObjects1= [];
gdjs.menuCode.GDsubvida_9595tituloObjects2= [];
gdjs.menuCode.GDsubvida_9595numeroObjects1= [];
gdjs.menuCode.GDsubvida_9595numeroObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige"), gdjs.menuCode.GDMedievalButtonBeigeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDMedievalButtonBeigeObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDMedievalButtonBeigeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDMedievalButtonBeigeObjects1[k] = gdjs.menuCode.GDMedievalButtonBeigeObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDMedievalButtonBeigeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena 1", true);
}
}

}


};gdjs.menuCode.eventsList1 = function(runtimeScene) {

{


gdjs.menuCode.eventsList0(runtimeScene);
}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.menuCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.menuCode.GDAreariesgoObjects1.length = 0;
gdjs.menuCode.GDAreariesgoObjects2.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDGordonObjects1.length = 0;
gdjs.menuCode.GDGordonObjects2.length = 0;
gdjs.menuCode.GDDino_9595MortObjects1.length = 0;
gdjs.menuCode.GDDino_9595MortObjects2.length = 0;
gdjs.menuCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.menuCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.menuCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.menuCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.menuCode.GDAreaRiesgoObjects1.length = 0;
gdjs.menuCode.GDAreaRiesgoObjects2.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects1.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects2.length = 0;
gdjs.menuCode.GDHeartObjects1.length = 0;
gdjs.menuCode.GDHeartObjects2.length = 0;
gdjs.menuCode.GDSpikesObjects1.length = 0;
gdjs.menuCode.GDSpikesObjects2.length = 0;
gdjs.menuCode.GDbloquefantasmaObjects1.length = 0;
gdjs.menuCode.GDbloquefantasmaObjects2.length = 0;
gdjs.menuCode.GDNewTextObjects1.length = 0;
gdjs.menuCode.GDNewTextObjects2.length = 0;
gdjs.menuCode.GDFireballObjects1.length = 0;
gdjs.menuCode.GDFireballObjects2.length = 0;
gdjs.menuCode.GDfireballObjects1.length = 0;
gdjs.menuCode.GDfireballObjects2.length = 0;
gdjs.menuCode.GDsubvida_9595tituloObjects1.length = 0;
gdjs.menuCode.GDsubvida_9595tituloObjects2.length = 0;
gdjs.menuCode.GDsubvida_9595numeroObjects1.length = 0;
gdjs.menuCode.GDsubvida_9595numeroObjects2.length = 0;

gdjs.menuCode.eventsList1(runtimeScene);
gdjs.menuCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.menuCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.menuCode.GDAreariesgoObjects1.length = 0;
gdjs.menuCode.GDAreariesgoObjects2.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDGordonObjects1.length = 0;
gdjs.menuCode.GDGordonObjects2.length = 0;
gdjs.menuCode.GDDino_9595MortObjects1.length = 0;
gdjs.menuCode.GDDino_9595MortObjects2.length = 0;
gdjs.menuCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.menuCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.menuCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.menuCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.menuCode.GDAreaRiesgoObjects1.length = 0;
gdjs.menuCode.GDAreaRiesgoObjects2.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects1.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects2.length = 0;
gdjs.menuCode.GDHeartObjects1.length = 0;
gdjs.menuCode.GDHeartObjects2.length = 0;
gdjs.menuCode.GDSpikesObjects1.length = 0;
gdjs.menuCode.GDSpikesObjects2.length = 0;
gdjs.menuCode.GDbloquefantasmaObjects1.length = 0;
gdjs.menuCode.GDbloquefantasmaObjects2.length = 0;
gdjs.menuCode.GDNewTextObjects1.length = 0;
gdjs.menuCode.GDNewTextObjects2.length = 0;
gdjs.menuCode.GDFireballObjects1.length = 0;
gdjs.menuCode.GDFireballObjects2.length = 0;
gdjs.menuCode.GDfireballObjects1.length = 0;
gdjs.menuCode.GDfireballObjects2.length = 0;
gdjs.menuCode.GDsubvida_9595tituloObjects1.length = 0;
gdjs.menuCode.GDsubvida_9595tituloObjects2.length = 0;
gdjs.menuCode.GDsubvida_9595numeroObjects1.length = 0;
gdjs.menuCode.GDsubvida_9595numeroObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
