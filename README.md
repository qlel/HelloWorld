# HelloWorld
first step
import pygame
import sys
import random

#初始化pygame
pygame.init()

size=width,height=600,400
speed=[-2,1]#x向左2，y向下1
bg=(255,255,255)

#创建指定大小的窗口
screen=pygame.display.set_mode(size)

#设置窗口标题
pygame.display.set_caption('世界第一公主殿下')

#加载图片
turtle=pygame.image.load('miku.png')
food=pygame.image.load('+.png')


#获得图片的位置矩形surface
position=turtle.get_rect()

p=[100,100]

while True:
    for event in pygame.event.get():
        if event.type==pygame.QUIT:
            sys.exit();

        #键盘按下事件
        if event.type==pygame.KEYDOWN:
            if event.key==pygame.K_LEFT:
                speed=[-1,0]
            if event.key==pygame.K_RIGHT:
                speed=[1,0]
            if event.key==pygame.K_UP:
                speed=[0,-1]
            if event.key==pygame.K_DOWN:
                speed=[0,1]  



    
    #移动图像
    position=position.move(speed)

    if position.left<0 or position.right>width:
        #翻转图像，（图片对象，是否水平翻转，是否垂直翻转）
        turtle=pygame.transform.flip(turtle,True,False)
        #反方向移动
        speed[0]=-speed[0]

    if position.top<0 or position.bottom>height:
        speed[1]=-speed[1]

    #填充背景
    screen.fill(bg)
    #更新图像
    screen.blit(turtle,position)

    screen.blit(food,p)
    #当x或y坐标相差不大于10
    if -10<position[0]-p[0]<10 or -10<position[1]-p[1]<10:
        x=random.randint(50,width-50) #随机数
        y=random.randint(50,height-50) #随机数
        p=[x,y]
        screen.blit(food,p)
    #更新界面
    pygame.display.flip()
    #延迟10毫秒
    pygame.time.delay(10)
