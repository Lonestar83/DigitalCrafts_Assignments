import pygame
import time
import random

pygame.init()

display_width = 450
display_height = 800

red = (255,0,0)

ship_width = 89

gameDisplay = pygame.display.set_mode((display_width, display_height))
pygame.display.set_caption('Avoid the Asteroid!')
clock = pygame.time.Clock()
    
spacebackgroundImg = pygame.image.load('background-3901037_960_720.jpg')
spaceshipImg = pygame.image.load('rocket-306209_960_720.png')
asteroidImg = pygame.image.load('asteroid-png-flying-16.png')

def things_dodged(count):
    font = pygame.font.SysFont(None, 25)
    text = font.render("Dodged: "+str(count), True, red)
    gameDisplay.blit(text, (0,0))

#def asteroids(asteroidx, asteroidy):
#    asteroid_starty = -60
#    asteroid_Startx = random.randrange(1,4)
#    gameDisplay.blit(asteroidImg, (asteroidx, asteroidy))

def background(backgroundx, backgroundy):
    gameDisplay.blit(spacebackgroundImg, (backgroundx,backgroundy))

def background2(background2x, background2y):
    gameDisplay.blit(spacebackgroundImg, (background2x, background2y))

class Asteroid(pygame.sprite.Sprite):
    def __init__(self, asteroid_startx, asteroid_speedy, asteroid_speedx):
        pygame.sprite.Sprite.__init__(self)
        self.asteroidImg = pygame.image.load('asteroid-png-flying-16.png')
        self.asteroid_starty = -60
        self.asteroid_startx = asteroid_startx
        self.asteroid_speedy = asteroid_speedy
        self.asteroid_speedx = asteroid_speedx
#    
#        gameDisplay.blit(self.asteroidImg, (asteroid_startx, asteroid_starty))

def ship(x,y):
    gameDisplay.blit(spaceshipImg, (x,y))

def text_objects(text, font):
    textSurface = font.render(text, True, red)
    return textSurface, textSurface.get_rect()

def message_display(text):
    largeText = pygame.font.Font('freesansbold.ttf', 115)
    TextSurf, TextRect = text_objects(text, largeText)
    TextRect.center = ((display_width/2),(display_height/2))
    gameDisplay.blit(TextSurf, TextRect)

    pygame.display.update()

    time.sleep(2)

    game_loop()

def crash():
    message_display('Crash!')
    
def game_loop():
    x = (display_width * 0.4)
    y = (display_height * 0.9)

    x_change = 0
    y_change = 0

    background_startx = 0
    background_starty = 0
    background_speed = 0.45

    background2_startx = 0
    background2_starty = 0 - display_height
    background2_speed = 0.45

    dodged = 0

    gameExit = False
    #gameOver = False

    while not gameExit:
        #while gameOver == True:

        
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()
            
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    x_change = -5
                elif event.key == pygame.K_RIGHT:
                    x_change = 5
                elif event.key == pygame.K_UP:
                    y_change = -5
                elif event.key == pygame.K_DOWN:
                    y_change = 5
                
            if event.type == pygame.KEYUP:
                if event.key == pygame.K_LEFT or event.key == pygame.K_RIGHT:
                    x_change = 0
                elif event.key == pygame.K_UP or event.key == pygame.K_DOWN:
                    y_change = 0

        x += x_change
        y += y_change
        gameDisplay.fill(red)
        
        background(background_startx, background_starty)
        background_starty += background_speed
        
        background2(background2_startx, background2_starty)
        background2_starty += background2_speed

        all_sprites_list = pygame.sprite.Group()
        for i in range(0, 3):
            all_sprites_list.add(Asteroid(random.randint(0, display_width), random.randint(1,4), random.randint(-1,1)))

        for i in range(0,3):
           gameDisplay.blit(asteroidImg, random.randint(0, display_width), -60)

        #asteroids(asteroid_startx, asteroid_starty)
        #asteroid_starty += asteroid_speedy
        #asteroid_startx += asteroid_speedx
        #asteroid = Asteroid()
        #asteroid.make_asteroid()
        ship(x,y)
        things_dodged(dodged)
        
        if x > display_width + 35:
            x = - 35
        elif x < - 35:
            x = display_width + 35

        if y > display_height - 35:
            y = -35
        elif y < -35:
            y = display_height + 35

        if background_starty > display_height:
            background_starty = 0 - display_height
        
        if background2_starty > display_height:
            background2_starty = 0 - display_height

        #if asteroid_starty > display_height or asteroid_startx > display_width or asteroid_startx < - 60:
        #    asteroid_starty = - 60
        #    asteroid_startx = random.randrange(0, display_width)
        #    anglex = random.randrange(-1, 1)
        #    dodged += 1

        #if (y < asteroid_starty + 50 and y > asteroid_starty - 50) or (y + 52 > asteroid_starty and y + 52 < asteroid_starty + 55):
        #    if (x > asteroid_startx and x < asteroid_startx + 45) or (x + 52 > asteroid_startx and x + 52 < asteroid_startx + 45):
        #        crash()
        
        pygame.display.update()
        clock.tick(60)

game_loop()
pygame.quit()
quit()
