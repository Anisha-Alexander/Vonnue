# CSS ANIMATIONS
-----------------

- Makes animating web elements much easier

- Eliminates the need for JavaScript/jQuery for a lot of animation effects

- Super easy once you get the hang of it


# TRANSFORMS
------------
- Translate : move the element from one position to the another  on webpage . We translate by X(right/left) axis or Y
              (updown) axis and Z axis.
            [transform:translateX(200px)or(-200px)] --200px to the right, -200px to the left.
            [transform:translateY(200px)]
            [transform:transate(-200px,200px)](X,Y)

- Scale     : It scale the element .Makes the element bigger or smaller , stretches or shrinks to the X axis or Y axis
               [transform:scaleY(3)]
               [transform:scale(3,0.5)] (X,Y)

- Rotate    : We cant really see the rotation we can see the height gets decreasing eventually
                [transform: rotateX(60deg)]
                [transfrom:rotateZ(60deg)] It can rotate in clock-wise direction  or in the anti-clockwise direction depending the value we give

- We can also combine these properties altogether :  [transform:translateY(200px) transform:scaleY(3) transfrom:rotateZ(60deg)]



# TRANSITIONS 
--------------

- The most simple way to do some kind of animation on a page but not technically part of the whole css animation camp. It is the transistion of an element from one state to another in a certain way a set amount of time. We us this to go from first state to the second state and we can set the options about how we want the transition to occur such as how long we want it to occur to take timingg functions that delay  
     [transition: background 1s, transform 0.3s 2s linear ;] 
     - linear : never fast nor slow will be in
                modereate speed
     - ease-in: starts up slower and gradually 
                speeds up .
     - ease-out. 
     - ease .

     - always the first one when you supply is the transition time and the second number you supply is the delay time 

# KEYFRAMES
-----------

- They are bascially the powerhouse of css animations and tell css how we want the animations to work, Which properties we're gonna change and when and how exactly they're going to do it.

- We use a different keyframe block every type of animation we use on the page 

# ANIMATION BASICS

- animation-name:drive
- animation-duration:3s
- animation-fill-mode: both,froward,backward
- animation-delay: 2s
- animation-iteration-count:3
- animation-direction: reverse(to-from) ,alternate(from-to,to-from), alternate-reverse(to-from,from-to) normal(from-to)
- animation-timing-function: ease, linear, ease-in, ease-out, ease-in-out, (we can also pass our own timining function) cubic-bezier(.42,0,.58.1)
        https://cubic-bezier.com/ : online tool. We can make our own kind of curve using adjusting the co-ordinates.

# WEB EXAMPLES