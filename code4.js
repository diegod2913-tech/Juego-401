gdjs.gameoverCode = {};
gdjs.gameoverCode.localVariables = [];
gdjs.gameoverCode.idToCallbackMap = new Map();
gdjs.gameoverCode.GDRedButtonWithStoneFrameObjects1= [];
gdjs.gameoverCode.GDRedButtonWithStoneFrameObjects2= [];
gdjs.gameoverCode.GDNewTiledSpriteObjects1= [];
gdjs.gameoverCode.GDNewTiledSpriteObjects2= [];
gdjs.gameoverCode.GDGordonObjects1= [];
gdjs.gameoverCode.GDGordonObjects2= [];
gdjs.gameoverCode.GDDino_9595MortObjects1= [];
gdjs.gameoverCode.GDDino_9595MortObjects2= [];
gdjs.gameoverCode.GDFloater_9595enemyObjects1= [];
gdjs.gameoverCode.GDFloater_9595enemyObjects2= [];
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1= [];
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2= [];
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595RightObjects1= [];
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595RightObjects2= [];
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1= [];
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2= [];
gdjs.gameoverCode.GDSummer_9595BackgroundObjects1= [];
gdjs.gameoverCode.GDSummer_9595BackgroundObjects2= [];
gdjs.gameoverCode.GDtrigger_9595arribaObjects1= [];
gdjs.gameoverCode.GDtrigger_9595arribaObjects2= [];
gdjs.gameoverCode.GDtrigger_9595abajoObjects1= [];
gdjs.gameoverCode.GDtrigger_9595abajoObjects2= [];
gdjs.gameoverCode.GDtrigger_9595derechaObjects1= [];
gdjs.gameoverCode.GDtrigger_9595derechaObjects2= [];
gdjs.gameoverCode.GDtrigger_9595izquierdaObjects1= [];
gdjs.gameoverCode.GDtrigger_9595izquierdaObjects2= [];
gdjs.gameoverCode.GDAreaRiesgoObjects1= [];
gdjs.gameoverCode.GDAreaRiesgoObjects2= [];
gdjs.gameoverCode.GDGold_9595CoinObjects1= [];
gdjs.gameoverCode.GDGold_9595CoinObjects2= [];
gdjs.gameoverCode.GDHeartObjects1= [];
gdjs.gameoverCode.GDHeartObjects2= [];
gdjs.gameoverCode.GDSpikesObjects1= [];
gdjs.gameoverCode.GDSpikesObjects2= [];
gdjs.gameoverCode.GDbloquefantasmaObjects1= [];
gdjs.gameoverCode.GDbloquefantasmaObjects2= [];
gdjs.gameoverCode.GDNewTextObjects1= [];
gdjs.gameoverCode.GDNewTextObjects2= [];
gdjs.gameoverCode.GDFireballObjects1= [];
gdjs.gameoverCode.GDFireballObjects2= [];
gdjs.gameoverCode.GDfireballObjects1= [];
gdjs.gameoverCode.GDfireballObjects2= [];
gdjs.gameoverCode.GDsubvida_9595tituloObjects1= [];
gdjs.gameoverCode.GDsubvida_9595tituloObjects2= [];
gdjs.gameoverCode.GDsubvida_9595numeroObjects1= [];
gdjs.gameoverCode.GDsubvida_9595numeroObjects2= [];


gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithStoneFrame"), gdjs.gameoverCode.GDRedButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameoverCode.GDRedButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.gameoverCode.GDRedButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.gameoverCode.GDRedButtonWithStoneFrameObjects1[k] = gdjs.gameoverCode.GDRedButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.gameoverCode.GDRedButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}
}

}


};gdjs.gameoverCode.eventsList1 = function(runtimeScene) {

{


gdjs.gameoverCode.eventsList0(runtimeScene);
}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.gameoverCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.gameoverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.gameoverCode.GDGordonObjects1.length = 0;
gdjs.gameoverCode.GDGordonObjects2.length = 0;
gdjs.gameoverCode.GDDino_9595MortObjects1.length = 0;
gdjs.gameoverCode.GDDino_9595MortObjects2.length = 0;
gdjs.gameoverCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.gameoverCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.gameoverCode.GDAreaRiesgoObjects1.length = 0;
gdjs.gameoverCode.GDAreaRiesgoObjects2.length = 0;
gdjs.gameoverCode.GDGold_9595CoinObjects1.length = 0;
gdjs.gameoverCode.GDGold_9595CoinObjects2.length = 0;
gdjs.gameoverCode.GDHeartObjects1.length = 0;
gdjs.gameoverCode.GDHeartObjects2.length = 0;
gdjs.gameoverCode.GDSpikesObjects1.length = 0;
gdjs.gameoverCode.GDSpikesObjects2.length = 0;
gdjs.gameoverCode.GDbloquefantasmaObjects1.length = 0;
gdjs.gameoverCode.GDbloquefantasmaObjects2.length = 0;
gdjs.gameoverCode.GDNewTextObjects1.length = 0;
gdjs.gameoverCode.GDNewTextObjects2.length = 0;
gdjs.gameoverCode.GDFireballObjects1.length = 0;
gdjs.gameoverCode.GDFireballObjects2.length = 0;
gdjs.gameoverCode.GDfireballObjects1.length = 0;
gdjs.gameoverCode.GDfireballObjects2.length = 0;
gdjs.gameoverCode.GDsubvida_9595tituloObjects1.length = 0;
gdjs.gameoverCode.GDsubvida_9595tituloObjects2.length = 0;
gdjs.gameoverCode.GDsubvida_9595numeroObjects1.length = 0;
gdjs.gameoverCode.GDsubvida_9595numeroObjects2.length = 0;

gdjs.gameoverCode.eventsList1(runtimeScene);
gdjs.gameoverCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.gameoverCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.gameoverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.gameoverCode.GDGordonObjects1.length = 0;
gdjs.gameoverCode.GDGordonObjects2.length = 0;
gdjs.gameoverCode.GDDino_9595MortObjects1.length = 0;
gdjs.gameoverCode.GDDino_9595MortObjects2.length = 0;
gdjs.gameoverCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.gameoverCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.gameoverCode.GDAreaRiesgoObjects1.length = 0;
gdjs.gameoverCode.GDAreaRiesgoObjects2.length = 0;
gdjs.gameoverCode.GDGold_9595CoinObjects1.length = 0;
gdjs.gameoverCode.GDGold_9595CoinObjects2.length = 0;
gdjs.gameoverCode.GDHeartObjects1.length = 0;
gdjs.gameoverCode.GDHeartObjects2.length = 0;
gdjs.gameoverCode.GDSpikesObjects1.length = 0;
gdjs.gameoverCode.GDSpikesObjects2.length = 0;
gdjs.gameoverCode.GDbloquefantasmaObjects1.length = 0;
gdjs.gameoverCode.GDbloquefantasmaObjects2.length = 0;
gdjs.gameoverCode.GDNewTextObjects1.length = 0;
gdjs.gameoverCode.GDNewTextObjects2.length = 0;
gdjs.gameoverCode.GDFireballObjects1.length = 0;
gdjs.gameoverCode.GDFireballObjects2.length = 0;
gdjs.gameoverCode.GDfireballObjects1.length = 0;
gdjs.gameoverCode.GDfireballObjects2.length = 0;
gdjs.gameoverCode.GDsubvida_9595tituloObjects1.length = 0;
gdjs.gameoverCode.GDsubvida_9595tituloObjects2.length = 0;
gdjs.gameoverCode.GDsubvida_9595numeroObjects1.length = 0;
gdjs.gameoverCode.GDsubvida_9595numeroObjects2.length = 0;


return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
