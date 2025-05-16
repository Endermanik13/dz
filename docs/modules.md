# Модули

## Функция `multiply`

```python
def multiply(x, y):
    """Умножает два числа.

    Args:
        x (float): Первое число.
        y (float): Второе число.

    Returns:
        float: Произведение x и y.
    """
    return x * y
```

## Функция `divide`

```python
def divide(x, y):
    """Делит первое число на второе.

    Args:
        x (float): Делимое.
        y (float): Делитель.

    Returns:
        float: Частное x и y.

    Raises:
        ZeroDivisionError: Если y равно 0.
    """
    if y == 0:
        raise ZeroDivisionError("Деление на ноль невозможно")
    return x / y
```
