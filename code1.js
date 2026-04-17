gdjs.escena_321Code = {};
gdjs.escena_321Code.localVariables = [];
gdjs.escena_321Code.idToCallbackMap = new Map();
gdjs.escena_321Code.GDflagObjects1= [];
gdjs.escena_321Code.GDflagObjects2= [];
gdjs.escena_321Code.GDflagObjects3= [];
gdjs.escena_321Code.GDA_9595ButtonObjects1= [];
gdjs.escena_321Code.GDA_9595ButtonObjects2= [];
gdjs.escena_321Code.GDA_9595ButtonObjects3= [];
gdjs.escena_321Code.GDX_9595ButtonObjects1= [];
gdjs.escena_321Code.GDX_9595ButtonObjects2= [];
gdjs.escena_321Code.GDX_9595ButtonObjects3= [];
gdjs.escena_321Code.GDTransparentDarkJoystickObjects1= [];
gdjs.escena_321Code.GDTransparentDarkJoystickObjects2= [];
gdjs.escena_321Code.GDTransparentDarkJoystickObjects3= [];
gdjs.escena_321Code.GDflyObjects1= [];
gdjs.escena_321Code.GDflyObjects2= [];
gdjs.escena_321Code.GDflyObjects3= [];
gdjs.escena_321Code.GDbeeObjects1= [];
gdjs.escena_321Code.GDbeeObjects2= [];
gdjs.escena_321Code.GDbeeObjects3= [];
gdjs.escena_321Code.GDNewTiledSpriteObjects1= [];
gdjs.escena_321Code.GDNewTiledSpriteObjects2= [];
gdjs.escena_321Code.GDNewTiledSpriteObjects3= [];
gdjs.escena_321Code.GDGordonObjects1= [];
gdjs.escena_321Code.GDGordonObjects2= [];
gdjs.escena_321Code.GDGordonObjects3= [];
gdjs.escena_321Code.GDDino_9595MortObjects1= [];
gdjs.escena_321Code.GDDino_9595MortObjects2= [];
gdjs.escena_321Code.GDDino_9595MortObjects3= [];
gdjs.escena_321Code.GDFloater_9595enemyObjects1= [];
gdjs.escena_321Code.GDFloater_9595enemyObjects2= [];
gdjs.escena_321Code.GDFloater_9595enemyObjects3= [];
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595LeftObjects1= [];
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595LeftObjects2= [];
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595LeftObjects3= [];
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595RightObjects1= [];
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595RightObjects2= [];
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595RightObjects3= [];
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595CenterObjects1= [];
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595CenterObjects2= [];
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595CenterObjects3= [];
gdjs.escena_321Code.GDSummer_9595BackgroundObjects1= [];
gdjs.escena_321Code.GDSummer_9595BackgroundObjects2= [];
gdjs.escena_321Code.GDSummer_9595BackgroundObjects3= [];
gdjs.escena_321Code.GDtrigger_9595arribaObjects1= [];
gdjs.escena_321Code.GDtrigger_9595arribaObjects2= [];
gdjs.escena_321Code.GDtrigger_9595arribaObjects3= [];
gdjs.escena_321Code.GDtrigger_9595abajoObjects1= [];
gdjs.escena_321Code.GDtrigger_9595abajoObjects2= [];
gdjs.escena_321Code.GDtrigger_9595abajoObjects3= [];
gdjs.escena_321Code.GDtrigger_9595derechaObjects1= [];
gdjs.escena_321Code.GDtrigger_9595derechaObjects2= [];
gdjs.escena_321Code.GDtrigger_9595derechaObjects3= [];
gdjs.escena_321Code.GDtrigger_9595izquierdaObjects1= [];
gdjs.escena_321Code.GDtrigger_9595izquierdaObjects2= [];
gdjs.escena_321Code.GDtrigger_9595izquierdaObjects3= [];
gdjs.escena_321Code.GDAreaRiesgoObjects1= [];
gdjs.escena_321Code.GDAreaRiesgoObjects2= [];
gdjs.escena_321Code.GDAreaRiesgoObjects3= [];
gdjs.escena_321Code.GDGold_9595CoinObjects1= [];
gdjs.escena_321Code.GDGold_9595CoinObjects2= [];
gdjs.escena_321Code.GDGold_9595CoinObjects3= [];
gdjs.escena_321Code.GDHeartObjects1= [];
gdjs.escena_321Code.GDHeartObjects2= [];
gdjs.escena_321Code.GDHeartObjects3= [];
gdjs.escena_321Code.GDSpikesObjects1= [];
gdjs.escena_321Code.GDSpikesObjects2= [];
gdjs.escena_321Code.GDSpikesObjects3= [];
gdjs.escena_321Code.GDbloquefantasmaObjects1= [];
gdjs.escena_321Code.GDbloquefantasmaObjects2= [];
gdjs.escena_321Code.GDbloquefantasmaObjects3= [];
gdjs.escena_321Code.GDNewTextObjects1= [];
gdjs.escena_321Code.GDNewTextObjects2= [];
gdjs.escena_321Code.GDNewTextObjects3= [];
gdjs.escena_321Code.GDFireballObjects1= [];
gdjs.escena_321Code.GDFireballObjects2= [];
gdjs.escena_321Code.GDFireballObjects3= [];
gdjs.escena_321Code.GDfireballObjects1= [];
gdjs.escena_321Code.GDfireballObjects2= [];
gdjs.escena_321Code.GDfireballObjects3= [];
gdjs.escena_321Code.GDsubvida_9595tituloObjects1= [];
gdjs.escena_321Code.GDsubvida_9595tituloObjects2= [];
gdjs.escena_321Code.GDsubvida_9595tituloObjects3= [];
gdjs.escena_321Code.GDsubvida_9595numeroObjects1= [];
gdjs.escena_321Code.GDsubvida_9595numeroObjects2= [];
gdjs.escena_321Code.GDsubvida_9595numeroObjects3= [];


gdjs.escena_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects2);
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects2);
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects2.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects2[k] = gdjs.escena_321Code.GDGordonObjects2[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDGordonObjects2 */
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("Animation").setAnimationName("Jump");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects2.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects2[k] = gdjs.escena_321Code.GDGordonObjects2[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects2.length;i<l;++i) {
    if ( !(gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects2[k] = gdjs.escena_321Code.GDGordonObjects2[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDGordonObjects2 */
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects2.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects2[k] = gdjs.escena_321Code.GDGordonObjects2[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects2.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects2[k] = gdjs.escena_321Code.GDGordonObjects2[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDGordonObjects2 */
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("Animation").setAnimationName("Running");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDGordonObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects1[k] = gdjs.escena_321Code.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDGordonObjects1 */
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects1[i].getBehavior("Animation").setAnimationName("Falling");
}
}
}

}


};gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGordonObjects1Objects = Hashtable.newFrom({"Gordon": gdjs.escena_321Code.GDGordonObjects1});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDAreaRiesgoObjects1Objects = Hashtable.newFrom({"AreaRiesgo": gdjs.escena_321Code.GDAreaRiesgoObjects1});
gdjs.escena_321Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AreaRiesgo"), gdjs.escena_321Code.GDAreaRiesgoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGordonObjects1Objects, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDAreaRiesgoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", true);
}
}

}


};gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGordonObjects1Objects = Hashtable.newFrom({"Gordon": gdjs.escena_321Code.GDGordonObjects1});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGold_95959595CoinObjects1Objects = Hashtable.newFrom({"Gold_Coin": gdjs.escena_321Code.GDGold_9595CoinObjects1});
gdjs.escena_321Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Gold_Coin"), gdjs.escena_321Code.GDGold_9595CoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGordonObjects1Objects, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGold_95959595CoinObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDGold_9595CoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.escena_321Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.escena_321Code.GDGold_9595CoinObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDGold_9595CoinObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(100);
}
{for(var i = 0, len = gdjs.escena_321Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDNewTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


};gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGordonObjects2Objects = Hashtable.newFrom({"Gordon": gdjs.escena_321Code.GDGordonObjects2});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDDino_95959595MortObjects2Objects = Hashtable.newFrom({"Dino_Mort": gdjs.escena_321Code.GDDino_9595MortObjects2});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGordonObjects1Objects = Hashtable.newFrom({"Gordon": gdjs.escena_321Code.GDGordonObjects1});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDDino_95959595MortObjects1Objects = Hashtable.newFrom({"Dino_Mort": gdjs.escena_321Code.GDDino_9595MortObjects1});
gdjs.escena_321Code.asyncCallback18163036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.escena_321Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Dino_Mort"), gdjs.escena_321Code.GDDino_9595MortObjects2);

{for(var i = 0, len = gdjs.escena_321Code.GDDino_9595MortObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDDino_9595MortObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.escena_321Code.localVariables.length = 0;
}
gdjs.escena_321Code.idToCallbackMap.set(18163036, gdjs.escena_321Code.asyncCallback18163036);
gdjs.escena_321Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.escena_321Code.localVariables);
for (const obj of gdjs.escena_321Code.GDDino_9595MortObjects1) asyncObjectsList.addObject("Dino_Mort", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.escena_321Code.asyncCallback18163036(runtimeScene, asyncObjectsList)), 18163036, asyncObjectsList);
}
}

}


};gdjs.escena_321Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.escena_321Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.escena_321Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dino_Mort"), gdjs.escena_321Code.GDDino_9595MortObjects2);
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGordonObjects2Objects, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDDino_95959595MortObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects2.length;i<l;++i) {
    if ( !(gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects2[k] = gdjs.escena_321Code.GDGordonObjects2[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18158572);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDGordonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("subvida_numero"), gdjs.escena_321Code.GDsubvida_9595numeroObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(2).sub(1);
}
{for(var i = 0, len = gdjs.escena_321Code.GDsubvida_9595numeroObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDsubvida_9595numeroObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("Resizable").setSize(48, 48);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() < 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects2);
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Mort"), gdjs.escena_321Code.GDDino_9595MortObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDGordonObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects1[k] = gdjs.escena_321Code.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGordonObjects1Objects, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDDino_95959595MortObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDGordonObjects1[i].getY() < (( gdjs.escena_321Code.GDDino_9595MortObjects1.length === 0 ) ? 0 :gdjs.escena_321Code.GDDino_9595MortObjects1[0].getPointY("center")) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects1[k] = gdjs.escena_321Code.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18161628);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDDino_9595MortObjects1 */
/* Reuse gdjs.escena_321Code.GDGordonObjects1 */
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDDino_9595MortObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDDino_9595MortObjects1[i].getBehavior("Animation").setAnimationName("Hurt");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}

{ //Subevents
gdjs.escena_321Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFloater_95959595enemyObjects2Objects = Hashtable.newFrom({"Floater_enemy": gdjs.escena_321Code.GDFloater_9595enemyObjects2});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFloater_95959595enemyObjects2Objects = Hashtable.newFrom({"Floater_enemy": gdjs.escena_321Code.GDFloater_9595enemyObjects2});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGordonObjects1Objects = Hashtable.newFrom({"Gordon": gdjs.escena_321Code.GDGordonObjects1});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFloater_95959595enemyObjects1Objects = Hashtable.newFrom({"Floater_enemy": gdjs.escena_321Code.GDFloater_9595enemyObjects1});
gdjs.escena_321Code.asyncCallback18168716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.escena_321Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Floater_enemy"), gdjs.escena_321Code.GDFloater_9595enemyObjects2);

{for(var i = 0, len = gdjs.escena_321Code.GDFloater_9595enemyObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDFloater_9595enemyObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.escena_321Code.localVariables.length = 0;
}
gdjs.escena_321Code.idToCallbackMap.set(18168716, gdjs.escena_321Code.asyncCallback18168716);
gdjs.escena_321Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.escena_321Code.localVariables);
for (const obj of gdjs.escena_321Code.GDFloater_9595enemyObjects1) asyncObjectsList.addObject("Floater_enemy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.escena_321Code.asyncCallback18168716(runtimeScene, asyncObjectsList)), 18168716, asyncObjectsList);
}
}

}


};gdjs.escena_321Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.escena_321Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.escena_321Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Floater_enemy"), gdjs.escena_321Code.GDFloater_9595enemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFloater_95959595enemyObjects2Objects, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFloater_95959595enemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects2.length;i<l;++i) {
    if ( !(gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects2[k] = gdjs.escena_321Code.GDGordonObjects2[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18164724);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDGordonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("subvida_numero"), gdjs.escena_321Code.GDsubvida_9595numeroObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(2).sub(1);
}
{for(var i = 0, len = gdjs.escena_321Code.GDsubvida_9595numeroObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDsubvida_9595numeroObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("Resizable").setSize(48, 48);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() < 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects2);
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Floater_enemy"), gdjs.escena_321Code.GDFloater_9595enemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDGordonObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects1[k] = gdjs.escena_321Code.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGordonObjects1Objects, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFloater_95959595enemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDGordonObjects1[i].getY() < (( gdjs.escena_321Code.GDFloater_9595enemyObjects1.length === 0 ) ? 0 :gdjs.escena_321Code.GDFloater_9595enemyObjects1[0].getPointY("center")) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects1[k] = gdjs.escena_321Code.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18167084);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDFloater_9595enemyObjects1 */
/* Reuse gdjs.escena_321Code.GDGordonObjects1 */
{for(var i = 0, len = gdjs.escena_321Code.GDFloater_9595enemyObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDFloater_9595enemyObjects1[i].getBehavior("Animation").setAnimationName("dead");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}

{ //Subevents
gdjs.escena_321Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGordonObjects1Objects = Hashtable.newFrom({"Gordon": gdjs.escena_321Code.GDGordonObjects1});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDHeartObjects1Objects = Hashtable.newFrom({"Heart": gdjs.escena_321Code.GDHeartObjects1});
gdjs.escena_321Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.escena_321Code.GDHeartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGordonObjects1Objects, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDHeartObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDGordonObjects1 */
/* Reuse gdjs.escena_321Code.GDHeartObjects1 */
gdjs.copyArray(runtimeScene.getObjects("subvida_numero"), gdjs.escena_321Code.GDsubvida_9595numeroObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects1[i].getBehavior("Resizable").setSize(65, 65);
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDsubvida_9595numeroObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDsubvida_9595numeroObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDHeartObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.escena_321Code.eventsList10 = function(runtimeScene) {

};gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.escena_321Code.GDFireballObjects2});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.escena_321Code.GDFireballObjects2});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGordonObjects1Objects = Hashtable.newFrom({"Gordon": gdjs.escena_321Code.GDGordonObjects1});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDfireballObjects1Objects = Hashtable.newFrom({"fireball": gdjs.escena_321Code.GDfireballObjects1});
gdjs.escena_321Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects2.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects2[k] = gdjs.escena_321Code.GDGordonObjects2[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18172084);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDGordonObjects2 */
gdjs.escena_321Code.GDFireballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFireballObjects2Objects, (( gdjs.escena_321Code.GDGordonObjects2.length === 0 ) ? 0 :gdjs.escena_321Code.GDGordonObjects2[0].getPointX("center")), (( gdjs.escena_321Code.GDGordonObjects2.length === 0 ) ? 0 :gdjs.escena_321Code.GDGordonObjects2[0].getPointY("center")), "");
}
{for(var i = 0, len = gdjs.escena_321Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDFireballObjects2[i].addForce(-(200), 0, 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects2.length;i<l;++i) {
    if ( !(gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects2[k] = gdjs.escena_321Code.GDGordonObjects2[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18173556);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDGordonObjects2 */
gdjs.escena_321Code.GDFireballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFireballObjects2Objects, (( gdjs.escena_321Code.GDGordonObjects2.length === 0 ) ? 0 :gdjs.escena_321Code.GDGordonObjects2[0].getPointX("center")), (( gdjs.escena_321Code.GDGordonObjects2.length === 0 ) ? 0 :gdjs.escena_321Code.GDGordonObjects2[0].getPointY("center")), "");
}
{for(var i = 0, len = gdjs.escena_321Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDFireballObjects2[i].addForce(200, 0, 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects1);
gdjs.copyArray(runtimeScene.getObjects("fireball"), gdjs.escena_321Code.GDfireballObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDGordonObjects1Objects, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDfireballObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDfireballObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}
{for(var i = 0, len = gdjs.escena_321Code.GDfireballObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDfireballObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDtrigger_95959595izquierdaObjects2Objects = Hashtable.newFrom({"trigger_izquierda": gdjs.escena_321Code.GDtrigger_9595izquierdaObjects2});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDDino_95959595MortObjects2Objects = Hashtable.newFrom({"Dino_Mort": gdjs.escena_321Code.GDDino_9595MortObjects2});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDtrigger_95959595derechaObjects2Objects = Hashtable.newFrom({"trigger_derecha": gdjs.escena_321Code.GDtrigger_9595derechaObjects2});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDDino_95959595MortObjects2Objects = Hashtable.newFrom({"Dino_Mort": gdjs.escena_321Code.GDDino_9595MortObjects2});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.escena_321Code.GDFireballObjects2});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDDino_95959595MortObjects2Objects = Hashtable.newFrom({"Dino_Mort": gdjs.escena_321Code.GDDino_9595MortObjects2});
gdjs.escena_321Code.asyncCallback18182844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.escena_321Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Dino_Mort"), gdjs.escena_321Code.GDDino_9595MortObjects2);

{for(var i = 0, len = gdjs.escena_321Code.GDDino_9595MortObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDDino_9595MortObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.escena_321Code.localVariables.length = 0;
}
gdjs.escena_321Code.idToCallbackMap.set(18182844, gdjs.escena_321Code.asyncCallback18182844);
gdjs.escena_321Code.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.escena_321Code.localVariables);
for (const obj of gdjs.escena_321Code.GDDino_9595MortObjects1) asyncObjectsList.addObject("Dino_Mort", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.escena_321Code.asyncCallback18182844(runtimeScene, asyncObjectsList)), 18182844, asyncObjectsList);
}
}

}


};gdjs.escena_321Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dino_Mort"), gdjs.escena_321Code.GDDino_9595MortObjects2);
gdjs.copyArray(runtimeScene.getObjects("trigger_izquierda"), gdjs.escena_321Code.GDtrigger_9595izquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDtrigger_95959595izquierdaObjects2Objects, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDDino_95959595MortObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDDino_9595MortObjects2 */
{for(var i = 0, len = gdjs.escena_321Code.GDDino_9595MortObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDDino_9595MortObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Mort"), gdjs.escena_321Code.GDDino_9595MortObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDDino_9595MortObjects2.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDDino_9595MortObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDDino_9595MortObjects2[k] = gdjs.escena_321Code.GDDino_9595MortObjects2[i];
        ++k;
    }
}
gdjs.escena_321Code.GDDino_9595MortObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDDino_9595MortObjects2 */
{for(var i = 0, len = gdjs.escena_321Code.GDDino_9595MortObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDDino_9595MortObjects2[i].setX(gdjs.escena_321Code.GDDino_9595MortObjects2[i].getX() + (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Mort"), gdjs.escena_321Code.GDDino_9595MortObjects2);
gdjs.copyArray(runtimeScene.getObjects("trigger_derecha"), gdjs.escena_321Code.GDtrigger_9595derechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDtrigger_95959595derechaObjects2Objects, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDDino_95959595MortObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDDino_9595MortObjects2 */
{for(var i = 0, len = gdjs.escena_321Code.GDDino_9595MortObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDDino_9595MortObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Mort"), gdjs.escena_321Code.GDDino_9595MortObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDDino_9595MortObjects2.length;i<l;++i) {
    if ( !(gdjs.escena_321Code.GDDino_9595MortObjects2[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDDino_9595MortObjects2[k] = gdjs.escena_321Code.GDDino_9595MortObjects2[i];
        ++k;
    }
}
gdjs.escena_321Code.GDDino_9595MortObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDDino_9595MortObjects2 */
{for(var i = 0, len = gdjs.escena_321Code.GDDino_9595MortObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDDino_9595MortObjects2[i].setX(gdjs.escena_321Code.GDDino_9595MortObjects2[i].getX() - (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Mort"), gdjs.escena_321Code.GDDino_9595MortObjects2);
gdjs.copyArray(runtimeScene.getObjects("Fireball"), gdjs.escena_321Code.GDFireballObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFireballObjects2Objects, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDDino_95959595MortObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18182004);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDDino_9595MortObjects2 */
{for(var i = 0, len = gdjs.escena_321Code.GDDino_9595MortObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDDino_9595MortObjects2[i].returnVariable(gdjs.escena_321Code.GDDino_9595MortObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino_Mort"), gdjs.escena_321Code.GDDino_9595MortObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDDino_9595MortObjects1.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDDino_9595MortObjects1[i].getVariableNumber(gdjs.escena_321Code.GDDino_9595MortObjects1[i].getVariables().getFromIndex(0)) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDDino_9595MortObjects1[k] = gdjs.escena_321Code.GDDino_9595MortObjects1[i];
        ++k;
    }
}
gdjs.escena_321Code.GDDino_9595MortObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.escena_321Code.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDtrigger_95959595abajoObjects2Objects = Hashtable.newFrom({"trigger_abajo": gdjs.escena_321Code.GDtrigger_9595abajoObjects2});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFloater_95959595enemyObjects2Objects = Hashtable.newFrom({"Floater_enemy": gdjs.escena_321Code.GDFloater_9595enemyObjects2});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDtrigger_95959595arribaObjects2Objects = Hashtable.newFrom({"trigger_arriba": gdjs.escena_321Code.GDtrigger_9595arribaObjects2});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFloater_95959595enemyObjects2Objects = Hashtable.newFrom({"Floater_enemy": gdjs.escena_321Code.GDFloater_9595enemyObjects2});
gdjs.escena_321Code.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Floater_enemy"), gdjs.escena_321Code.GDFloater_9595enemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("trigger_abajo"), gdjs.escena_321Code.GDtrigger_9595abajoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDtrigger_95959595abajoObjects2Objects, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFloater_95959595enemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDFloater_9595enemyObjects2 */
{for(var i = 0, len = gdjs.escena_321Code.GDFloater_9595enemyObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDFloater_9595enemyObjects2[i].getBehavior("Flippable").flipY(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Floater_enemy"), gdjs.escena_321Code.GDFloater_9595enemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDFloater_9595enemyObjects2.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDFloater_9595enemyObjects2[i].getBehavior("Flippable").isFlippedY() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDFloater_9595enemyObjects2[k] = gdjs.escena_321Code.GDFloater_9595enemyObjects2[i];
        ++k;
    }
}
gdjs.escena_321Code.GDFloater_9595enemyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDFloater_9595enemyObjects2 */
{for(var i = 0, len = gdjs.escena_321Code.GDFloater_9595enemyObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDFloater_9595enemyObjects2[i].setY(gdjs.escena_321Code.GDFloater_9595enemyObjects2[i].getY() - (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Floater_enemy"), gdjs.escena_321Code.GDFloater_9595enemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("trigger_arriba"), gdjs.escena_321Code.GDtrigger_9595arribaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDtrigger_95959595arribaObjects2Objects, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFloater_95959595enemyObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDFloater_9595enemyObjects2 */
{for(var i = 0, len = gdjs.escena_321Code.GDFloater_9595enemyObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDFloater_9595enemyObjects2[i].getBehavior("Flippable").flipY(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Floater_enemy"), gdjs.escena_321Code.GDFloater_9595enemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDFloater_9595enemyObjects1.length;i<l;++i) {
    if ( !(gdjs.escena_321Code.GDFloater_9595enemyObjects1[i].getBehavior("Flippable").isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDFloater_9595enemyObjects1[k] = gdjs.escena_321Code.GDFloater_9595enemyObjects1[i];
        ++k;
    }
}
gdjs.escena_321Code.GDFloater_9595enemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDFloater_9595enemyObjects1 */
{for(var i = 0, len = gdjs.escena_321Code.GDFloater_9595enemyObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDFloater_9595enemyObjects1[i].setY(gdjs.escena_321Code.GDFloater_9595enemyObjects1[i].getY() + (1));
}
}
}

}


};gdjs.escena_321Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("fly"), gdjs.escena_321Code.GDflyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDflyObjects1.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDflyObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDflyObjects1[k] = gdjs.escena_321Code.GDflyObjects1[i];
        ++k;
    }
}
gdjs.escena_321Code.GDflyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDflyObjects1 */
{for(var i = 0, len = gdjs.escena_321Code.GDflyObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDflyObjects1[i].addForce(-(100), 0, 0);
}
}
}

}


};gdjs.escena_321Code.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs.escena_321Code.GDbeeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDbeeObjects1.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDbeeObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDbeeObjects1[k] = gdjs.escena_321Code.GDbeeObjects1[i];
        ++k;
    }
}
gdjs.escena_321Code.GDbeeObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects1);
/* Reuse gdjs.escena_321Code.GDbeeObjects1 */
{for(var i = 0, len = gdjs.escena_321Code.GDbeeObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDbeeObjects1[i].addForceTowardObject((gdjs.escena_321Code.GDGordonObjects1.length !== 0 ? gdjs.escena_321Code.GDGordonObjects1[0] : null), 150, 0);
}
}
}

}


};gdjs.escena_321Code.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("A_Button"), gdjs.escena_321Code.GDA_9595ButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.escena_321Code.GDTransparentDarkJoystickObjects2);
gdjs.copyArray(runtimeScene.getObjects("X_Button"), gdjs.escena_321Code.GDX_9595ButtonObjects2);
{for(var i = 0, len = gdjs.escena_321Code.GDA_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDA_9595ButtonObjects2[i].getBehavior("Opacity").setOpacity(95);
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDX_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDX_9595ButtonObjects2[i].getBehavior("Opacity").setOpacity(95);
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDTransparentDarkJoystickObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDTransparentDarkJoystickObjects2[i].getBehavior("Opacity").setOpacity(95);
}
}
}

}


};gdjs.escena_321Code.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("A_Button"), gdjs.escena_321Code.GDA_9595ButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDA_9595ButtonObjects2.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDA_9595ButtonObjects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDA_9595ButtonObjects2[k] = gdjs.escena_321Code.GDA_9595ButtonObjects2[i];
        ++k;
    }
}
gdjs.escena_321Code.GDA_9595ButtonObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects2);
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("Animation").setAnimationName("Jump");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, 1, "Primary", "Right", null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects2);
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("Animation").setAnimationName("Running");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, 1, "Primary", "Left", null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects1);
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDGordonObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDGordonObjects1[i].getBehavior("Animation").setAnimationName("Running");
}
}
}

}


};gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.escena_321Code.GDFireballObjects2});
gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFireballObjects1Objects = Hashtable.newFrom({"Fireball": gdjs.escena_321Code.GDFireballObjects1});
gdjs.escena_321Code.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects2);
gdjs.copyArray(runtimeScene.getObjects("X_Button"), gdjs.escena_321Code.GDX_9595ButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDX_9595ButtonObjects2.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDX_9595ButtonObjects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDX_9595ButtonObjects2[k] = gdjs.escena_321Code.GDX_9595ButtonObjects2[i];
        ++k;
    }
}
gdjs.escena_321Code.GDX_9595ButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects2.length;i<l;++i) {
    if ( !(gdjs.escena_321Code.GDGordonObjects2[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects2[k] = gdjs.escena_321Code.GDGordonObjects2[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18196036);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDGordonObjects2 */
gdjs.escena_321Code.GDFireballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFireballObjects2Objects, (( gdjs.escena_321Code.GDGordonObjects2.length === 0 ) ? 0 :gdjs.escena_321Code.GDGordonObjects2[0].getPointX("center")), (( gdjs.escena_321Code.GDGordonObjects2.length === 0 ) ? 0 :gdjs.escena_321Code.GDGordonObjects2[0].getPointY("center")), "");
}
{for(var i = 0, len = gdjs.escena_321Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.escena_321Code.GDFireballObjects2[i].addForce(200, 0, 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects1);
gdjs.copyArray(runtimeScene.getObjects("X_Button"), gdjs.escena_321Code.GDX_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDX_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDX_9595ButtonObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDX_9595ButtonObjects1[k] = gdjs.escena_321Code.GDX_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.escena_321Code.GDX_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDGordonObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects1[k] = gdjs.escena_321Code.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18197676);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDGordonObjects1 */
gdjs.escena_321Code.GDFireballObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.escena_321Code.mapOfGDgdjs_9546escena_9595321Code_9546GDFireballObjects1Objects, (( gdjs.escena_321Code.GDGordonObjects1.length === 0 ) ? 0 :gdjs.escena_321Code.GDGordonObjects1[0].getPointX("center")), (( gdjs.escena_321Code.GDGordonObjects1.length === 0 ) ? 0 :gdjs.escena_321Code.GDGordonObjects1[0].getPointY("center")), "");
}
{for(var i = 0, len = gdjs.escena_321Code.GDFireballObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDFireballObjects1[i].addForce(-(200), 0, 1);
}
}
}

}


};gdjs.escena_321Code.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.escena_321Code.GDGordonObjects1.length !== 0 ? gdjs.escena_321Code.GDGordonObjects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 916, 220, "", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.escena_321Code.GDGordonObjects1.length !== 0 ? gdjs.escena_321Code.GDGordonObjects1[0] : null), true, "tile set", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 916, 220, "tile set", 0);
}
}

}


};gdjs.escena_321Code.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AreaRiesgo"), gdjs.escena_321Code.GDAreaRiesgoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.escena_321Code.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("trigger_abajo"), gdjs.escena_321Code.GDtrigger_9595abajoObjects1);
gdjs.copyArray(runtimeScene.getObjects("trigger_arriba"), gdjs.escena_321Code.GDtrigger_9595arribaObjects1);
gdjs.copyArray(runtimeScene.getObjects("trigger_derecha"), gdjs.escena_321Code.GDtrigger_9595derechaObjects1);
gdjs.copyArray(runtimeScene.getObjects("trigger_izquierda"), gdjs.escena_321Code.GDtrigger_9595izquierdaObjects1);
{for(var i = 0, len = gdjs.escena_321Code.GDtrigger_9595arribaObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDtrigger_9595arribaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDtrigger_9595abajoObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDtrigger_9595abajoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDtrigger_9595izquierdaObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDtrigger_9595izquierdaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDtrigger_9595derechaObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDtrigger_9595derechaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDAreaRiesgoObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDAreaRiesgoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.escena_321Code.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDNewTiledSpriteObjects1[i].hide();
}
}
}

}


};gdjs.escena_321Code.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bloquefantasma"), gdjs.escena_321Code.GDbloquefantasmaObjects1);
{for(var i = 0, len = gdjs.escena_321Code.GDbloquefantasmaObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDbloquefantasmaObjects1[i].addForce(100, 0, 0);
}
}
}

}


};gdjs.escena_321Code.asyncCallback18010116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.escena_321Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena 1 - copia", true);
}
gdjs.escena_321Code.localVariables.length = 0;
}
gdjs.escena_321Code.idToCallbackMap.set(18010116, gdjs.escena_321Code.asyncCallback18010116);
gdjs.escena_321Code.eventsList23 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.escena_321Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.escena_321Code.asyncCallback18010116(runtimeScene, asyncObjectsList)), 18010116, asyncObjectsList);
}
}

}


};gdjs.escena_321Code.eventsList24 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Gordon"), gdjs.escena_321Code.GDGordonObjects1);
gdjs.copyArray(runtimeScene.getObjects("flag"), gdjs.escena_321Code.GDflagObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena_321Code.GDGordonObjects1.length;i<l;++i) {
    if ( gdjs.escena_321Code.GDGordonObjects1[i].getX() > (( gdjs.escena_321Code.GDflagObjects1.length === 0 ) ? 0 :gdjs.escena_321Code.GDflagObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.escena_321Code.GDGordonObjects1[k] = gdjs.escena_321Code.GDGordonObjects1[i];
        ++k;
    }
}
gdjs.escena_321Code.GDGordonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.escena_321Code.GDflagObjects1 */
{for(var i = 0, len = gdjs.escena_321Code.GDflagObjects1.length ;i < len;++i) {
    gdjs.escena_321Code.GDflagObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}

{ //Subevents
gdjs.escena_321Code.eventsList23(runtimeScene);} //End of subevents
}

}


};gdjs.escena_321Code.eventsList25 = function(runtimeScene) {

{


gdjs.escena_321Code.eventsList0(runtimeScene);
}


{


gdjs.escena_321Code.eventsList1(runtimeScene);
}


{


gdjs.escena_321Code.eventsList2(runtimeScene);
}


{


gdjs.escena_321Code.eventsList5(runtimeScene);
}


{


gdjs.escena_321Code.eventsList8(runtimeScene);
}


{


gdjs.escena_321Code.eventsList9(runtimeScene);
}


{


gdjs.escena_321Code.eventsList10(runtimeScene);
}


{


gdjs.escena_321Code.eventsList11(runtimeScene);
}


{


gdjs.escena_321Code.eventsList13(runtimeScene);
}


{


gdjs.escena_321Code.eventsList14(runtimeScene);
}


{


gdjs.escena_321Code.eventsList15(runtimeScene);
}


{


gdjs.escena_321Code.eventsList16(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.escena_321Code.eventsList17(runtimeScene);
}


{


gdjs.escena_321Code.eventsList18(runtimeScene);
}


{


gdjs.escena_321Code.eventsList19(runtimeScene);
}


{


gdjs.escena_321Code.eventsList20(runtimeScene);
}


{


gdjs.escena_321Code.eventsList21(runtimeScene);
}


{


gdjs.escena_321Code.eventsList22(runtimeScene);
}


{


gdjs.escena_321Code.eventsList24(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSound(runtimeScene, "MUSIC.mp3", true, 30, 1);
}
}

}


};

gdjs.escena_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.escena_321Code.GDflagObjects1.length = 0;
gdjs.escena_321Code.GDflagObjects2.length = 0;
gdjs.escena_321Code.GDflagObjects3.length = 0;
gdjs.escena_321Code.GDA_9595ButtonObjects1.length = 0;
gdjs.escena_321Code.GDA_9595ButtonObjects2.length = 0;
gdjs.escena_321Code.GDA_9595ButtonObjects3.length = 0;
gdjs.escena_321Code.GDX_9595ButtonObjects1.length = 0;
gdjs.escena_321Code.GDX_9595ButtonObjects2.length = 0;
gdjs.escena_321Code.GDX_9595ButtonObjects3.length = 0;
gdjs.escena_321Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.escena_321Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.escena_321Code.GDTransparentDarkJoystickObjects3.length = 0;
gdjs.escena_321Code.GDflyObjects1.length = 0;
gdjs.escena_321Code.GDflyObjects2.length = 0;
gdjs.escena_321Code.GDflyObjects3.length = 0;
gdjs.escena_321Code.GDbeeObjects1.length = 0;
gdjs.escena_321Code.GDbeeObjects2.length = 0;
gdjs.escena_321Code.GDbeeObjects3.length = 0;
gdjs.escena_321Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.escena_321Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.escena_321Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.escena_321Code.GDGordonObjects1.length = 0;
gdjs.escena_321Code.GDGordonObjects2.length = 0;
gdjs.escena_321Code.GDGordonObjects3.length = 0;
gdjs.escena_321Code.GDDino_9595MortObjects1.length = 0;
gdjs.escena_321Code.GDDino_9595MortObjects2.length = 0;
gdjs.escena_321Code.GDDino_9595MortObjects3.length = 0;
gdjs.escena_321Code.GDFloater_9595enemyObjects1.length = 0;
gdjs.escena_321Code.GDFloater_9595enemyObjects2.length = 0;
gdjs.escena_321Code.GDFloater_9595enemyObjects3.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595LeftObjects3.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595RightObjects3.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595CenterObjects3.length = 0;
gdjs.escena_321Code.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.escena_321Code.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.escena_321Code.GDSummer_9595BackgroundObjects3.length = 0;
gdjs.escena_321Code.GDtrigger_9595arribaObjects1.length = 0;
gdjs.escena_321Code.GDtrigger_9595arribaObjects2.length = 0;
gdjs.escena_321Code.GDtrigger_9595arribaObjects3.length = 0;
gdjs.escena_321Code.GDtrigger_9595abajoObjects1.length = 0;
gdjs.escena_321Code.GDtrigger_9595abajoObjects2.length = 0;
gdjs.escena_321Code.GDtrigger_9595abajoObjects3.length = 0;
gdjs.escena_321Code.GDtrigger_9595derechaObjects1.length = 0;
gdjs.escena_321Code.GDtrigger_9595derechaObjects2.length = 0;
gdjs.escena_321Code.GDtrigger_9595derechaObjects3.length = 0;
gdjs.escena_321Code.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.escena_321Code.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.escena_321Code.GDtrigger_9595izquierdaObjects3.length = 0;
gdjs.escena_321Code.GDAreaRiesgoObjects1.length = 0;
gdjs.escena_321Code.GDAreaRiesgoObjects2.length = 0;
gdjs.escena_321Code.GDAreaRiesgoObjects3.length = 0;
gdjs.escena_321Code.GDGold_9595CoinObjects1.length = 0;
gdjs.escena_321Code.GDGold_9595CoinObjects2.length = 0;
gdjs.escena_321Code.GDGold_9595CoinObjects3.length = 0;
gdjs.escena_321Code.GDHeartObjects1.length = 0;
gdjs.escena_321Code.GDHeartObjects2.length = 0;
gdjs.escena_321Code.GDHeartObjects3.length = 0;
gdjs.escena_321Code.GDSpikesObjects1.length = 0;
gdjs.escena_321Code.GDSpikesObjects2.length = 0;
gdjs.escena_321Code.GDSpikesObjects3.length = 0;
gdjs.escena_321Code.GDbloquefantasmaObjects1.length = 0;
gdjs.escena_321Code.GDbloquefantasmaObjects2.length = 0;
gdjs.escena_321Code.GDbloquefantasmaObjects3.length = 0;
gdjs.escena_321Code.GDNewTextObjects1.length = 0;
gdjs.escena_321Code.GDNewTextObjects2.length = 0;
gdjs.escena_321Code.GDNewTextObjects3.length = 0;
gdjs.escena_321Code.GDFireballObjects1.length = 0;
gdjs.escena_321Code.GDFireballObjects2.length = 0;
gdjs.escena_321Code.GDFireballObjects3.length = 0;
gdjs.escena_321Code.GDfireballObjects1.length = 0;
gdjs.escena_321Code.GDfireballObjects2.length = 0;
gdjs.escena_321Code.GDfireballObjects3.length = 0;
gdjs.escena_321Code.GDsubvida_9595tituloObjects1.length = 0;
gdjs.escena_321Code.GDsubvida_9595tituloObjects2.length = 0;
gdjs.escena_321Code.GDsubvida_9595tituloObjects3.length = 0;
gdjs.escena_321Code.GDsubvida_9595numeroObjects1.length = 0;
gdjs.escena_321Code.GDsubvida_9595numeroObjects2.length = 0;
gdjs.escena_321Code.GDsubvida_9595numeroObjects3.length = 0;

gdjs.escena_321Code.eventsList25(runtimeScene);
gdjs.escena_321Code.GDflagObjects1.length = 0;
gdjs.escena_321Code.GDflagObjects2.length = 0;
gdjs.escena_321Code.GDflagObjects3.length = 0;
gdjs.escena_321Code.GDA_9595ButtonObjects1.length = 0;
gdjs.escena_321Code.GDA_9595ButtonObjects2.length = 0;
gdjs.escena_321Code.GDA_9595ButtonObjects3.length = 0;
gdjs.escena_321Code.GDX_9595ButtonObjects1.length = 0;
gdjs.escena_321Code.GDX_9595ButtonObjects2.length = 0;
gdjs.escena_321Code.GDX_9595ButtonObjects3.length = 0;
gdjs.escena_321Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.escena_321Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.escena_321Code.GDTransparentDarkJoystickObjects3.length = 0;
gdjs.escena_321Code.GDflyObjects1.length = 0;
gdjs.escena_321Code.GDflyObjects2.length = 0;
gdjs.escena_321Code.GDflyObjects3.length = 0;
gdjs.escena_321Code.GDbeeObjects1.length = 0;
gdjs.escena_321Code.GDbeeObjects2.length = 0;
gdjs.escena_321Code.GDbeeObjects3.length = 0;
gdjs.escena_321Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.escena_321Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.escena_321Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.escena_321Code.GDGordonObjects1.length = 0;
gdjs.escena_321Code.GDGordonObjects2.length = 0;
gdjs.escena_321Code.GDGordonObjects3.length = 0;
gdjs.escena_321Code.GDDino_9595MortObjects1.length = 0;
gdjs.escena_321Code.GDDino_9595MortObjects2.length = 0;
gdjs.escena_321Code.GDDino_9595MortObjects3.length = 0;
gdjs.escena_321Code.GDFloater_9595enemyObjects1.length = 0;
gdjs.escena_321Code.GDFloater_9595enemyObjects2.length = 0;
gdjs.escena_321Code.GDFloater_9595enemyObjects3.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595LeftObjects3.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595RightObjects3.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.escena_321Code.GDSummer_9595Tile_9595Platform_9595CenterObjects3.length = 0;
gdjs.escena_321Code.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.escena_321Code.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.escena_321Code.GDSummer_9595BackgroundObjects3.length = 0;
gdjs.escena_321Code.GDtrigger_9595arribaObjects1.length = 0;
gdjs.escena_321Code.GDtrigger_9595arribaObjects2.length = 0;
gdjs.escena_321Code.GDtrigger_9595arribaObjects3.length = 0;
gdjs.escena_321Code.GDtrigger_9595abajoObjects1.length = 0;
gdjs.escena_321Code.GDtrigger_9595abajoObjects2.length = 0;
gdjs.escena_321Code.GDtrigger_9595abajoObjects3.length = 0;
gdjs.escena_321Code.GDtrigger_9595derechaObjects1.length = 0;
gdjs.escena_321Code.GDtrigger_9595derechaObjects2.length = 0;
gdjs.escena_321Code.GDtrigger_9595derechaObjects3.length = 0;
gdjs.escena_321Code.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.escena_321Code.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.escena_321Code.GDtrigger_9595izquierdaObjects3.length = 0;
gdjs.escena_321Code.GDAreaRiesgoObjects1.length = 0;
gdjs.escena_321Code.GDAreaRiesgoObjects2.length = 0;
gdjs.escena_321Code.GDAreaRiesgoObjects3.length = 0;
gdjs.escena_321Code.GDGold_9595CoinObjects1.length = 0;
gdjs.escena_321Code.GDGold_9595CoinObjects2.length = 0;
gdjs.escena_321Code.GDGold_9595CoinObjects3.length = 0;
gdjs.escena_321Code.GDHeartObjects1.length = 0;
gdjs.escena_321Code.GDHeartObjects2.length = 0;
gdjs.escena_321Code.GDHeartObjects3.length = 0;
gdjs.escena_321Code.GDSpikesObjects1.length = 0;
gdjs.escena_321Code.GDSpikesObjects2.length = 0;
gdjs.escena_321Code.GDSpikesObjects3.length = 0;
gdjs.escena_321Code.GDbloquefantasmaObjects1.length = 0;
gdjs.escena_321Code.GDbloquefantasmaObjects2.length = 0;
gdjs.escena_321Code.GDbloquefantasmaObjects3.length = 0;
gdjs.escena_321Code.GDNewTextObjects1.length = 0;
gdjs.escena_321Code.GDNewTextObjects2.length = 0;
gdjs.escena_321Code.GDNewTextObjects3.length = 0;
gdjs.escena_321Code.GDFireballObjects1.length = 0;
gdjs.escena_321Code.GDFireballObjects2.length = 0;
gdjs.escena_321Code.GDFireballObjects3.length = 0;
gdjs.escena_321Code.GDfireballObjects1.length = 0;
gdjs.escena_321Code.GDfireballObjects2.length = 0;
gdjs.escena_321Code.GDfireballObjects3.length = 0;
gdjs.escena_321Code.GDsubvida_9595tituloObjects1.length = 0;
gdjs.escena_321Code.GDsubvida_9595tituloObjects2.length = 0;
gdjs.escena_321Code.GDsubvida_9595tituloObjects3.length = 0;
gdjs.escena_321Code.GDsubvida_9595numeroObjects1.length = 0;
gdjs.escena_321Code.GDsubvida_9595numeroObjects2.length = 0;
gdjs.escena_321Code.GDsubvida_9595numeroObjects3.length = 0;


return;

}

gdjs['escena_321Code'] = gdjs.escena_321Code;
