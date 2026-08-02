gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDplayerObjects1= [];
gdjs.Game_32SceneCode.GDplayerObjects2= [];
gdjs.Game_32SceneCode.GDBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDCoinsObjects1= [];
gdjs.Game_32SceneCode.GDCoinsObjects2= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects1= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects2= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects1= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2= [];
gdjs.Game_32SceneCode.GDGunObjects1= [];
gdjs.Game_32SceneCode.GDGunObjects2= [];
gdjs.Game_32SceneCode.GDSwordObjects1= [];
gdjs.Game_32SceneCode.GDSwordObjects2= [];
gdjs.Game_32SceneCode.GDActtackObjects1= [];
gdjs.Game_32SceneCode.GDActtackObjects2= [];
gdjs.Game_32SceneCode.GDEnemyObjects1= [];
gdjs.Game_32SceneCode.GDEnemyObjects2= [];
gdjs.Game_32SceneCode.GDGreenFlatBarObjects1= [];
gdjs.Game_32SceneCode.GDGreenFlatBarObjects2= [];
gdjs.Game_32SceneCode.GDBulletObjects1= [];
gdjs.Game_32SceneCode.GDBulletObjects2= [];
gdjs.Game_32SceneCode.GDLowPoly3DHeartObjects1= [];
gdjs.Game_32SceneCode.GDLowPoly3DHeartObjects2= [];
gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1= [];
gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects2= [];
gdjs.Game_32SceneCode.GDYoudiedObjects1= [];
gdjs.Game_32SceneCode.GDYoudiedObjects2= [];
gdjs.Game_32SceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Game_32SceneCode.GDNewTiledSpriteObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Game_32SceneCode.GDplayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.Game_32SceneCode.GDCoinsObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Game_32SceneCode.GDplayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDGunObjects1Objects = Hashtable.newFrom({"Gun": gdjs.Game_32SceneCode.GDGunObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32SceneCode.GDBulletObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Game_32SceneCode.GDplayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595GroundObjects1Objects = Hashtable.newFrom({"Platform_Ground": gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32SceneCode.GDBulletObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32SceneCode.GDBulletObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Game_32SceneCode.GDplayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDYoudiedObjects1Objects = Hashtable.newFrom({"Youdied": gdjs.Game_32SceneCode.GDYoudiedObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Game_32SceneCode.GDNewTiledSpriteObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "Background", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Game_32SceneCode.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32SceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDplayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/CoinPickUp.wav", false, 80, gdjs.randomFloatInRange(0.75, 1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Game_32SceneCode.GDGunObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32SceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDplayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDGunObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16455788);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDGunObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDGunObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenFlatBar"), gdjs.Game_32SceneCode.GDGreenFlatBarObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreenFlatBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreenFlatBarObjects1[i].SetMaxValue(100, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreenFlatBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreenFlatBarObjects1[i].SetValue(100, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Game_32SceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBulletObjects1 */
gdjs.copyArray(runtimeScene.getObjects("GreenFlatBar"), gdjs.Game_32SceneCode.GDGreenFlatBarObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreenFlatBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreenFlatBarObjects1[i].SetValue(gdjs.Game_32SceneCode.GDGreenFlatBarObjects1[i].Value(null) - (40), null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenFlatBar"), gdjs.Game_32SceneCode.GDGreenFlatBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDGreenFlatBarObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDGreenFlatBarObjects1[i].Value(null) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDGreenFlatBarObjects1[k] = gdjs.Game_32SceneCode.GDGreenFlatBarObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDGreenFlatBarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
/* Reuse gdjs.Game_32SceneCode.GDGreenFlatBarObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreenFlatBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreenFlatBarObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32SceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDplayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects, 300, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].addForceTowardObject((gdjs.Game_32SceneCode.GDplayerObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDplayerObjects1[0] : null), 100, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenFlatBar"), gdjs.Game_32SceneCode.GDGreenFlatBarObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreenFlatBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreenFlatBarObjects1[i].setX((( gdjs.Game_32SceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects1[0].getPointX("")) + ((( gdjs.Game_32SceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects1[0].getWidth()) / 2) - ((gdjs.Game_32SceneCode.GDGreenFlatBarObjects1[i].getWidth()) / 2));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreenFlatBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreenFlatBarObjects1[i].setY((( gdjs.Game_32SceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects1[0].getPointY("")) - 15);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform_Ground"), gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595GroundObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].addPolarForce(90, 200, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Game_32SceneCode.GDGunObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32SceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].setX((( gdjs.Game_32SceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDplayerObjects1[0].getPointX("")) + 30);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].setY((( gdjs.Game_32SceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDplayerObjects1[0].getPointY("")) + 5);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].getBehavior("Flippable").flipX(false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Game_32SceneCode.GDGunObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32SceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].setX((( gdjs.Game_32SceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDplayerObjects1[0].getPointX("")) - 30);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].setY((( gdjs.Game_32SceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDplayerObjects1[0].getPointY("")) + 5);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].getBehavior("Flippable").flipX(true);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32SceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDplayerObjects1[k] = gdjs.Game_32SceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDplayerObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Game_32SceneCode.GDGunObjects1);
/* Reuse gdjs.Game_32SceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].setY((( gdjs.Game_32SceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDplayerObjects1[0].getPointY("")) + 5);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Game_32SceneCode.GDGunObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32SceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].setX((( gdjs.Game_32SceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDplayerObjects1[0].getPointX("")) + 30);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].setY((( gdjs.Game_32SceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDplayerObjects1[0].getPointY("")) + 5);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Game_32SceneCode.GDGunObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32SceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].setX((( gdjs.Game_32SceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDplayerObjects1[0].getPointX("")) - 30);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].setY((( gdjs.Game_32SceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDplayerObjects1[0].getPointY("")) + 5);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32SceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDplayerObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDplayerObjects1[k] = gdjs.Game_32SceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDplayerObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Game_32SceneCode.GDGunObjects1);
/* Reuse gdjs.Game_32SceneCode.GDplayerObjects1 */
gdjs.Game_32SceneCode.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].setX((( gdjs.Game_32SceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDplayerObjects1[0].getPointX("")) + 30);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].getBehavior("FireBullet3").Fire((gdjs.Game_32SceneCode.GDGunObjects1[i].getPointX("BulletSpawn")), (gdjs.Game_32SceneCode.GDGunObjects1[i].getPointY("BulletSpawn")), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects, 0, 500, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32SceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDplayerObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDplayerObjects1[k] = gdjs.Game_32SceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDplayerObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Game_32SceneCode.GDGunObjects1);
/* Reuse gdjs.Game_32SceneCode.GDplayerObjects1 */
gdjs.Game_32SceneCode.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].setX((( gdjs.Game_32SceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDplayerObjects1[0].getPointX("")) - 30);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].getBehavior("FireBullet3").Fire((gdjs.Game_32SceneCode.GDGunObjects1[i].getPointX("BulletSpawn")), (gdjs.Game_32SceneCode.GDGunObjects1[i].getPointY("BulletSpawn")), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects, 180, 500, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("RoundedSquareGreenBar"), gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32SceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1[i].setY((( gdjs.Game_32SceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDplayerObjects1[0].getPointY("")) - 15);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1[i].setX((( gdjs.Game_32SceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDplayerObjects1[0].getPointX("")) + ((( gdjs.Game_32SceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDplayerObjects1[0].getWidth()) / 2) - ((gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1[i].getWidth()) / 2));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RoundedSquareGreenBar"), gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1[i].SetMaxValue(100, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1[i].SetValue(100, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32SceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDplayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RoundedSquareGreenBar"), gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1[i].SetValue(gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1[i].Value(null) - (0.5), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RoundedSquareGreenBar"), gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1[i].Value(null) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1[k] = gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11872660);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Game_32SceneCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenFlatBar"), gdjs.Game_32SceneCode.GDGreenFlatBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Game_32SceneCode.GDGunObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform_Ground"), gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1);
/* Reuse gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1 */
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32SceneCode.GDplayerObjects1);
gdjs.Game_32SceneCode.GDNewTiledSpriteObjects1.length = 0;

gdjs.Game_32SceneCode.GDYoudiedObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDplayerObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBackgroundObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGunObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreenFlatBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreenFlatBarObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDYoudiedObjects1Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 50, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "MobileControls");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDNewTiledSpriteObjects1Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2), "");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RoundedSquareGreenBar"), gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1[i].Value(null) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1[k] = gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12588508);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Game_32SceneCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Youdied"), gdjs.Game_32SceneCode.GDYoudiedObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewTiledSpriteObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDYoudiedObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDYoudiedObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDplayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDplayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGunObjects1.length = 0;
gdjs.Game_32SceneCode.GDGunObjects2.length = 0;
gdjs.Game_32SceneCode.GDSwordObjects1.length = 0;
gdjs.Game_32SceneCode.GDSwordObjects2.length = 0;
gdjs.Game_32SceneCode.GDActtackObjects1.length = 0;
gdjs.Game_32SceneCode.GDActtackObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDGreenFlatBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDGreenFlatBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDLowPoly3DHeartObjects1.length = 0;
gdjs.Game_32SceneCode.GDLowPoly3DHeartObjects2.length = 0;
gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDYoudiedObjects1.length = 0;
gdjs.Game_32SceneCode.GDYoudiedObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32SceneCode.GDplayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDplayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGunObjects1.length = 0;
gdjs.Game_32SceneCode.GDGunObjects2.length = 0;
gdjs.Game_32SceneCode.GDSwordObjects1.length = 0;
gdjs.Game_32SceneCode.GDSwordObjects2.length = 0;
gdjs.Game_32SceneCode.GDActtackObjects1.length = 0;
gdjs.Game_32SceneCode.GDActtackObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDGreenFlatBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDGreenFlatBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDLowPoly3DHeartObjects1.length = 0;
gdjs.Game_32SceneCode.GDLowPoly3DHeartObjects2.length = 0;
gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDRoundedSquareGreenBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDYoudiedObjects1.length = 0;
gdjs.Game_32SceneCode.GDYoudiedObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewTiledSpriteObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
